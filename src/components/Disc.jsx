import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import {EffectComposer, Glitch} from "@react-three/postprocessing";

const Disc = () => {
  const frontTexture = useLoader(THREE.TextureLoader, '/disc/front.webp');
  const backTexture = useLoader(THREE.TextureLoader, '/disc/back.webp');
  const sideTexture = useLoader(THREE.TextureLoader, '/disc/side.webp');

  const materials = [
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 } ),
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: sideTexture, roughness: 0, metalness: 0 }),
    new THREE.MeshStandardMaterial({ map: frontTexture, roughness: 0.2, metalness: 0.5 }),
    new THREE.MeshStandardMaterial({ map: backTexture, roughness: 0.2, metalness: 0.5 })
  ];

  return (
    <>
      <mesh scale={3.5} material={materials}>
        <boxGeometry args={[1, 1, 0.05]} />
      </mesh>
    </>
  );
}

export default Disc;