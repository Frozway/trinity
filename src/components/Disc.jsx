import {useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import {useRef, useState, useEffect} from 'react';
import {Html, Outlines} from "@react-three/drei";
import {gsap} from 'gsap';

const Disc = () => {
  const frontTexture = useLoader(THREE.TextureLoader, '/disc/front.webp');
  const backTexture = useLoader(THREE.TextureLoader, '/disc/back.webp');
  const sideTexture = useLoader(THREE.TextureLoader, '/disc/side.webp');

  const meshRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [size, setSize] = useState({x: 5.5, y: 5.3});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize({x: 3, y: 2.8});
      } else {
        setSize({x: 5.5, y: 5.3});
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
    gsap.to(meshRef.current.rotation, {
      duration: 3,
      x: isReversed ? 0 : Math.PI * 2,
      y: isReversed ? 0 : Math.PI * 3,
      onComplete: () => setIsReversed(!isReversed),
      ease: 'power3.inOut'
    });
  };

  return (
    <mesh
      ref={meshRef}
      material={materials}
      geometry={new THREE.BoxGeometry(size.x, size.y, 0.2)}
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
      {hovered && <Outlines screenspace thickness={0.08} color={"#399463"}/>}
      <Html
        scale={1.5}
        transform
        position={[0, 0, 0.8]}
        occlude={[meshRef]}
        pointerEvents={"none"}
      >
        <div className="flex flex-col items-center justify-end">
          <h1 className="md:text-4xl fixed z-0 dm-serif-text-regular-italic">Laylow</h1>
          <h1 className="md:text-3xl z-10 great-vibes-regular">Trinity</h1>
        </div>
      </Html>
    </mesh>
  );
}

export default Disc;