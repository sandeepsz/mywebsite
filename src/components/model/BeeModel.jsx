// components/BeeModel.jsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";

const BeeModel = () => {
  const modelRef = useRef();
  const mixerRef = useRef();
  const [activeSection, setActiveSection] = useState(null);
  const { scene, camera } = useThree();

  let scaleFactor = 24;
  if (window.innerWidth <= 768) {
    scaleFactor = 15;
  }

  let cameraPosition = 120;
  if (window.innerWidth <= 768) {
    cameraPosition = 150;
  }

  let homePositionX = 20;
  if (window.innerWidth <= 768) {
    homePositionX = 0;
  }
  let homePositionY = -1;
  if (window.innerWidth <= 768) {
    homePositionY = 30;
  }

  useEffect(() => {
    // Set up camera
    camera.position.set(0, 0, cameraPosition);
    camera.fov = 45;
    camera.updateProjectionMatrix();

    // Configure scene

    scene.fog = new THREE.Fog(0x1111111, 200, 1000);

    const loader = new GLTFLoader();
    loader.load("/src/assets/model/demon_bee_full_texture.glb", (gltf) => {
      const bee = gltf.scene;
      modelRef.current = bee;
      bee.scale.set(scaleFactor, scaleFactor, scaleFactor);
      bee.rotation.set(0, 1, 0);
      bee.position.set(-1, 0, 0);

      scene.add(bee);

      if (gltf.animations.length) {
        mixerRef.current = new THREE.AnimationMixer(bee);
        const action = mixerRef.current.clipAction(gltf.animations[0]);
        action.play();
      }

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(0, 10, 10);

      scene.add(ambientLight, directionalLight);
    });

    return () => {
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }
    };
  }, [scene, camera]);

  // Scroll section detection and position update
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentSectionId;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    if (modelRef.current && activeSection) {
      const arrPositionModel = [
        {
          id: "home",
          position: { x: homePositionX, y: homePositionY, z: 0 },
          rotation: { x: 0, y: 1.5, z: 0 },
        },
        {
          id: "skill",
          position: { x: -60, y: -1, z: -20 },
          rotation: { x: 0.5, y: -0.5, z: 0 },
        },
        {
          id: "project",
          position: { x: 80, y: -1, z: -30 },
          rotation: { x: 0, y: 0.5, z: 0 },
        },
        {
          id: "contact",
          position: { x: 0.8, y: -1, z: 0 },
          rotation: { x: 0.3, y: -0.5, z: 0 },
        },
      ];

      const currentPosition = arrPositionModel.find(
        (item) => item.id === activeSection
      );

      if (currentPosition) {
        gsap.to(modelRef.current.position, {
          x: currentPosition.position.x,
          y: currentPosition.position.y,
          z: currentPosition.position.z,
          duration: 2,
          ease: "power1.out",
        });

        gsap.to(modelRef.current.rotation, {
          x: currentPosition.rotation.x,
          y: currentPosition.rotation.y,
          z: currentPosition.rotation.z,
          duration: 2,
          ease: "power1.out",
        });
      }
    }
  });

  return null;
};

export default BeeModel;
