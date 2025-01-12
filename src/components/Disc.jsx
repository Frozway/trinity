import {useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import {useEffect, useRef, useState} from 'react';
import {Html, Outlines} from "@react-three/drei";
import {gsap} from 'gsap';
import useStorage, {secondClick} from "../services/useStorage.js";
import {motion} from "motion/react";

const Disc = (props) => {

  const {isStarted} = useStorage();

  const frontTexture = useLoader(THREE.TextureLoader, '/disc/front.webp');
  const backTexture = useLoader(THREE.TextureLoader, '/disc/back.webp');
  const sideTexture = useLoader(THREE.TextureLoader, '/disc/side.webp');

  const meshRef = useRef();
  const titleRef = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [size, setSize] = useState({x: 5.5, y: 5.3, z: 0.2});

  const discPosition = {x: 0, y: 0, z: -10};

  useEffect(() => {
    console.log(isStarted);
    if(isStarted) {
      gsap.to(meshRef.current['position'], {
        duration: 4,
        z: 0,
        ease: 'power3.inOut'
      });
    }
  }, [isStarted]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({x: 3, y: 2.8, z: 0.1});
      } else {
        setSize({x: 5.5, y: 5.3, z: 0.2});
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const materials = [
    new THREE.MeshStandardMaterial({map: sideTexture, roughness: 0, metalness: 0}),
    new THREE.MeshStandardMaterial({map: sideTexture, roughness: 0, metalness: 0}),
    new THREE.MeshStandardMaterial({map: sideTexture, roughness: 0, metalness: 0}),
    new THREE.MeshStandardMaterial({map: sideTexture, roughness: 0, metalness: 0}),
    new THREE.MeshStandardMaterial({map: frontTexture, roughness: 0.1, metalness: 0.5}),
    new THREE.MeshStandardMaterial({map: backTexture, roughness: 0.2, metalness: 0.5})
  ];

  const handleClick = () => {
    secondClick.play().then(r => r);
    gsap.to(meshRef.current['rotation'], {
      duration: 1.3,
      y: isReversed ? 0 : Math.PI,
      onComplete: () => setIsReversed(!isReversed),
      ease: 'power3.inOut'
    });
  };

  return (
    <mesh
      ref={meshRef}
      {...props}
      material={materials}
      geometry={new THREE.BoxGeometry(size.x, size.y, size.z)}
      position={[discPosition.x, discPosition.y, discPosition.z]}
      onPointerEnter={(event) => {
        document.body.style.cursor = "pointer";
        setIsHovered(true);
        event.stopPropagation();
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "auto";
        setIsHovered(false);
      }}
      onClick={handleClick}
    >
      {isHovered && (
        <>
          <Outlines screenspace thickness={0.08} color={"#399463"} />
        </>
      )}
      <Html
        ref={titleRef}
        transform
        position={[0, 0, 0.8]}
        occlude={[meshRef]}
        pointerEvents={"none"}
      >
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: isHovered ? 0 : 1}}
          transition={{duration: 0.5}}
          className="flex flex-col items-center justify-end select-none z-0"
        >
          <h1 className="md:text-4xl fixed z-0 dm-serif-text-regular-italic">Laylow</h1>
          <h1 className="md:text-3xl z-10 great-vibes-regular">Trinity</h1>
        </motion.div>

      </Html>
    </mesh>
  );
}

export default Disc;