import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  install(app) {
    // Combine everything you want globally
    const three = {
      ...THREE,
      OrbitControls,
      GLTFLoader
    };

    // Make it global in Vue Options API
    app.config.globalProperties.$three = three;

    // Make it injectable in Composition API
    app.provide("three", three);

    // Optional: log to console to verify
    console.log("✅ Global THREE is ready:", Object.keys(three));
  }
};
