import Disc from "./Disc.jsx";
import {Environment, Float, Sparkles} from "@react-three/drei";
import {Perf} from "r3f-perf";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";

const Experience = () => {

  useFrame((state, delta) => {
      easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 3, 5], 0.25, delta) // Move camera
      state.camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {window.location.hash === "#debug" && <Perf position={'top-left'}/>}

      <ambientLight intensity={1}/>
      <Environment preset={'warehouse'}/>
      <Sparkles scale={[30,30,30]} count={1500} color={'#00ff00'} size={3} speed={2}/>

      <Float speed={2.5}>
        <Disc position={[0, 0, 0]} />
      </Float>

    </>
  )
}

export default Experience;