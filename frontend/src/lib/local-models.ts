import bundle from "../../models/inference.json";

import { EXERCISES } from "@/features/exercises/config";
import type { CatalogItem, ModelMetadata, ModelName, Prediction } from "@/lib/api/types";
import { buildEquation } from "@/lib/regression";

/** Linear form of the .joblib files copied into frontend/models. Same numbers as pipeline.predict. */
const MODELS = bundle.models;

const NAMES = ["dollar", "glucose", "energy"] as const satisfies readonly ModelName[];

function artifact(name: ModelName) {
  const model = MODELS[name];
  if (!model) throw new Error(`No hay modelo local para ${name}.`);
  return model;
}

export function localCatalog(): CatalogItem[] {
  return NAMES.map((name) => {
    const model = artifact(name);
    const metrics = model.training_metrics;
    return {
      model_name: name,
      exercise_title: model.exercise_title,
      target: model.target,
      r2_score: metrics.r2,
      mse: metrics.mse,
      rmse: metrics.rmse,
      version: model.version,
      trained_at: null,
      artifact_loaded: true,
    };
  });
}

export function localMetadata(name: ModelName): ModelMetadata {
  const model = artifact(name);
  return {
    model_name: name,
    target: model.target,
    algorithm: "Multiple Linear Regression (StandardScaler + sklearn)",
    feature_names: model.feature_names,
    training_metrics: model.training_metrics,
    coefficients: model.coefficients,
    version: model.version,
  };
}

export function localPredict(name: ModelName, inputs: Record<string, number>): Prediction {
  const spec = EXERCISES[name];
  const metadata = localMetadata(name);
  const equation = buildEquation(spec, metadata, spec.toFeatures(inputs));
  if (equation.total === undefined) throw new Error(`No se pudo evaluar el modelo ${name}.`);

  return {
    prediction: equation.total,
    model_name: name,
    target: metadata.target,
    model_r2: metadata.training_metrics.r2,
    model_mse: metadata.training_metrics.mse,
    model_rmse: metadata.training_metrics.rmse ?? null,
    stored_in_history: false,
  };
}
