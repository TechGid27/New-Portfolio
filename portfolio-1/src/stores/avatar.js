import { defineStore } from 'pinia'
import { markRaw } from 'vue' // Necessary to prevent the Proxy error
import * as THREE from 'three'

export const useAvatarStore = defineStore('avatar', {
  state: () => ({
    scene: null,
    camera: null,
    renderer: null,
    avatar: null,
    headGroup: null,
    frameId: null,
    mouse: new THREE.Vector2(),
    colors: {
      skin: 0xe0ac69,
      shirt: 0x85554C,
      shirtDark: 0x6b443c,
      hair: 0x1a1a1a,
      eyes: 0x222222,
    }
  }),

  actions: {
    init(container) {
      // Use markRaw on all Three.js core objects
      this.scene = markRaw(new THREE.Scene())

      this.camera = markRaw(new THREE.PerspectiveCamera(
        50,
        container.clientWidth / container.clientHeight,
        0.1, 100
      ))
      this.camera.position.set(0, 1.4, 3.8)
      this.camera.lookAt(0, 1.2, 0)

      this.renderer = markRaw(new THREE.WebGLRenderer({ alpha: true, antialias: true }))
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      container.appendChild(this.renderer.domElement)

      // Lighting
      this.scene.add(new THREE.AmbientLight(0xffffff, 0.6))
      const spotlight = new THREE.SpotLight(0xffffff, 1)
      spotlight.position.set(2, 4, 3)
      this.scene.add(spotlight)

      this.createAvatar()
      this.animate()

      // Ensure 'this' context is preserved in the resize listener
      this._resizeHandler = () => this.handleResize(container)
      window.addEventListener("resize", this._resizeHandler)
    },

    createAvatar() {
      const group = new THREE.Group()

      // Head
      this.headGroup = markRaw(new THREE.Group())
      const headGeo = new THREE.SphereGeometry(0.42, 25, 30).scale(0.92, 1.1, 0.9)
      const head = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: this.colors.skin, roughness: 0.7 }))
      head.position.y = 1.6

      const hairGeo = new THREE.SphereGeometry(0.409, 32, 32).scale(0.95, 1.05, 1)
      const hair = new THREE.Mesh(hairGeo, new THREE.MeshStandardMaterial({ color: this.colors.hair, roughness: 0.8 }))
      hair.position.set(0, 1.72, -0.05)

      const eyeGeo = new THREE.SphereGeometry(0.06, 16, 16)
      const eyeMat = new THREE.MeshStandardMaterial({ color: this.colors.eyes })
      const leftEye = new THREE.Mesh(eyeGeo, eyeMat)
      leftEye.position.set(-0.15, 1.65, 0.38)
      const rightEye = new THREE.Mesh(eyeGeo, eyeMat)
      rightEye.position.set(0.15, 1.65, 0.38)

      this.headGroup.add(head, hair, leftEye, rightEye)

      // Body
      const bodyGeo = new THREE.CapsuleGeometry(0.45, 0.8, 10, 20)
      const bodyMat = new THREE.MeshStandardMaterial({ color: this.colors.shirt, roughness: 0.85 })
      const body = new THREE.Mesh(bodyGeo, bodyMat)
      body.position.y = 0.5

      group.add(body, this.headGroup)

      this.avatar = markRaw(group)
      this.scene.add(this.avatar)
    },

    updateMouse(x, y, rect) {
      this.mouse.x = ((x - rect.left) / rect.width) * 2 - 1
      this.mouse.y = -((y - rect.top) / rect.height) * 2 + 1
    },

    animate() {
      this.frameId = requestAnimationFrame(() => this.animate())
      const time = Date.now() * 0.002

      if (this.avatar) {
        this.avatar.position.y = Math.sin(time) * 0.02
      }

      if (this.headGroup) {
        // Linear interpolation for smooth movement
        this.headGroup.rotation.y = THREE.MathUtils.lerp(this.headGroup.rotation.y, this.mouse.x * 0.5, 0.1)
        this.headGroup.rotation.x = THREE.MathUtils.lerp(this.headGroup.rotation.x, -this.mouse.y * 0.2, 0.1)
      }

      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera)
      }
    },

    handleResize(container) {
      if (!container || !this.camera || !this.renderer) return
      this.camera.aspect = container.clientWidth / container.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(container.clientWidth, container.clientHeight)
    },

    cleanup() {
      cancelAnimationFrame(this.frameId)
      if (this.renderer) {
        this.renderer.dispose()
        this.renderer.forceContextLoss() // Helps free memory immediately
      }
      window.removeEventListener("resize", this._resizeHandler)
    }
  }
})
