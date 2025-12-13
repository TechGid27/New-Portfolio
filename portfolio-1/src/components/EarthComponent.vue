<script setup>
import { inject, onMounted, ref } from "vue";

const THREE = inject("three");
const container = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 3.5);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true   // allow transparency
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(container.value.clientWidth, container.value.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.value.appendChild(renderer.domElement);

  const loader = new THREE.TextureLoader();

  // ===== OFFICIAL THREE.JS TEXTURES (WORKING 100%) =====
  const earthDay = loader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg");
  const earthNight = loader.load("https://threejs.org/examples/textures/planets/earth_lights_2048.png");
  const earthNormal = loader.load("https://threejs.org/examples/textures/planets/earth_normal_2048.jpg");
  const earthSpecular = loader.load("https://threejs.org/examples/textures/planets/earth_specular_2048.jpg");
  const cloudsMap = loader.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png");
  // const stars = loader.load("https://threejs.org/examples/textures/galaxy_starfield.png");

  // ===== Earth =====
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshPhongMaterial({
      map: earthDay,
      normalMap: earthNormal,
      specularMap: earthSpecular,
      specular: new THREE.Color(0x444444),
      shininess: 10,
      emissiveMap: earthNight,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.4
    })
  );
  scene.add(earth);

  // ===== Clouds =====
  const clouds = new THREE.Mesh(
    new THREE.SphereGeometry(1.01, 64, 64),
    new THREE.MeshPhongMaterial({
      map: cloudsMap,
      transparent: true,
      opacity: 0.4,
      depthWrite: false
    })
  );
  scene.add(clouds);

  // ===== Atmosphere Glow =====
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.08, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x4ea5ff,
      transparent: true,
      opacity: 0.00,
      side: THREE.BackSide
    })
  );
  scene.add(atmosphere);

  // ===== Lighting =====
  const sunLight = new THREE.DirectionalLight(0xffffff, 2);
  sunLight.position.set(5, 2, 5);
  scene.add(sunLight);

  scene.add(new THREE.AmbientLight(0x222222));

  // ===== Star Background =====
  // const starField = new THREE.Mesh(
  //   new THREE.SphereGeometry(80, 64, 64),
  //   new THREE.MeshBasicMaterial({
  //     map: stars,
  //     side: THREE.BackSide
  //   })
  // );
  // scene.add(starField);

  // ===== Controls =====
  // const controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = false;

  // ===== Animation =====
  const animate = () => {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.0008;
    clouds.rotation.y += 0.001;
    // controls.update();
    renderer.render(scene, camera);
  };
  animate();

  // ===== Resize =====
  // window.addEventListener("resize", () => {
  //   camera.aspect = container.value.clientWidth / container.value.clientHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  // });
});
</script>

<template>
  <div ref="container" class="w-full h-screen"></div>
</template>

<style scoped>

.earth-style{
  width: 100%;
  max-height: 100%;
  min-height: 100vh;
}

</style>
