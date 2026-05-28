// models.js — define your available Ollama models here
// Each entry: { id: "model name sent to API", label: "display name in dropdown" }

const OLLAMA_MODELS = [
  { id: "llama3.2",         label: "Llama 3.2" },
  { id: "qwen2.5-coder:7b", label: "qwen2.5-coder:7b" },
];

// Default model to select on load (must match an `id` above)
const DEFAULT_MODEL = "llama3.2";