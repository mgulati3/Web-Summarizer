// config.js
// Global configuration for the AI Summary Chrome Extension

// Feature toggle (can be used later for A/B testing or dev flags)
const FEATURE_FLAGS = {
  enableExperimentalUI: false,
};

// App version
const APP_VERSION = "1.0";

// Debug mode flag
const DEBUG = true;

// Utility: log only if DEBUG is true
function logDebug(...args) {
  if (DEBUG) console.log("[AI Summary]", ...args);
}