"""Copy packaged models into the frontend and write the linear form the browser can run.

joblib artifacts need scikit-learn. The UI fallback uses the same original-unit
coefficients already stored in each artifact, which match pipeline.predict.
"""

from __future__ import annotations

import json
import shutil
from pathlib import Path

import joblib
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "models"
TARGET = ROOT / "frontend" / "models"

TITLES = {
    "dollar": "Ejercicio 1: Precio del dólar",
    "glucose": "Ejercicio 2: Nivel de glucosa",
    "energy": "Ejercicio 3: Consumo de energía",
}

PROBES = {
    "dollar": {"day": 120, "inflation_rate": 0.02, "interest_rate": 5.0},
    "glucose": {"age": 45, "bmi": 25.0, "physical_activity_hours": 5},
    "energy": {"temperature": 22.0, "hour_sin": 0.5, "hour_cos": -0.5, "day_of_week": 3},
}


def linear_predict(coefficients: list[dict], features: dict[str, float]) -> float:
    by_name = {row["feature"]: float(row["coefficient"]) for row in coefficients}
    total = by_name["intercept"]
    for name, value in features.items():
        total += by_name[name] * float(value)
    return total


def main() -> None:
    TARGET.mkdir(parents=True, exist_ok=True)
    models: dict[str, dict] = {}

    for name in ("dollar", "glucose", "energy"):
        source = SOURCE / f"{name}_model.joblib"
        shutil.copy2(source, TARGET / source.name)
        artifact = joblib.load(source)
        features = {key: float(value) for key, value in PROBES[name].items()}
        frame = pd.DataFrame([features], columns=artifact["feature_names"])
        from_pipeline = float(artifact["pipeline"].predict(frame)[0])
        from_line = linear_predict(artifact["coefficients"], features)
        if abs(from_pipeline - from_line) > 1e-6:
            raise SystemExit(f"{name}: la recta no reproduce el .joblib ({from_pipeline} vs {from_line})")

        metrics = {key: float(value) for key, value in artifact["metrics"].items()}
        models[name] = {
            "model_name": name,
            "target": artifact["target"],
            "exercise_title": TITLES[name],
            "feature_names": list(artifact["feature_names"]),
            "training_metrics": metrics,
            "coefficients": artifact["coefficients"],
            "version": "v1",
        }

    shutil.copy2(SOURCE / "training_metrics.json", TARGET / "training_metrics.json")
    payload = {
        "source": "models/*.joblib",
        "note": "Coeficientes en unidades originales. Coinciden con pipeline.predict del .joblib.",
        "models": models,
    }
    (TARGET / "inference.json").write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Copied models to {TARGET}")


if __name__ == "__main__":
    main()
