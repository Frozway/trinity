import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import {useRef, useState} from 'react';
import { Outlines } from "@react-three/drei";
import { gsap } from 'gsap';

const Disc = () => {
  const frontTexture = useLoader(THREE.TextureLoader, '/disc/front.webp');
  const backTexture = useLoader(THREE.TextureLoader, '/disc/back.webp');
  const sideTexture = useLoader(THREE.TextureLoader, '/disc/side.webp');

  const meshRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const materials = [
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: frontTexture, roughness: 0.2, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ map: backTexture, roughness: 0.2, metalness: 0.5 })
  ];

  const handleClick = () => {
    gsap.to(meshRef.current.rotation, {
      duration: 1,
      y: isReversed ? 0 : Math.PI,
      onComplete: () => setIsReversed(!isReversed),
      ease: 'power3.inOut'
    });
  };


  return (
    <mesh
      ref={meshRef}
      material={materials}
      geometry={new THREE.BoxGeometry(5.5, 5, 0.05,)}
      onPointerEnter={(event) => {
        document.body.style.cursor = "pointer";
        setHovered(true);
        event.stopPropagation();
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "auto";
        setHovered(false);
      }}
      onClick={handleClick}
    >
      {hovered && <Outlines screenspace thickness={0.05} color={"#399463"}/>}
    </mesh>
  );
}

export default Disc;