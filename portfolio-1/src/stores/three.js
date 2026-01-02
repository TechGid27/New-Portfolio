import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  install(app) {
    const three = {
      ...THREE,
      OrbitControls,
      GLTFLoader
    };
    app.config.globalProperties.$three = three;
    app.provide("three", three);


  }
};
