import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./ThreeBackground.css";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;

    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      // Position particles in a 3D space with more concentration in the center
      posArray[i] = (Math.random() - 0.5) * 5 * (Math.random() * 3);
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x8a6cff, // Purple-ish color
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Mesh
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = 2;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the particle system
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0003;

      // Follow mouse with subtle movement
      particlesMesh.rotation.x +=
        (mouseY * 0.0005 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y +=
        (mouseX * 0.0005 - particlesMesh.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      mountRef.current.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particlesMesh);
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
};

export default ThreeBackground;
