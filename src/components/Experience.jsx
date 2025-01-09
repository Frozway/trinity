import Disc from "./Disc.jsx";
import {Environment, Float, Sparkles} from "@react-three/drei";
import {Perf} from "r3f-perf";
import PostProcessing from "./PostProcessing.jsx";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import {useRef} from "react";

const Experience = () => {

  const sparkles = useRef()

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-state.pointer.x * 3, state.pointer.y * 4, 5], 0.25, delta) // Move camera
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <>

      <Perf position={'top-left'}/>
      <PostProcessing/>

      {/* ENVIRONMENT */}
      <color attach="background" args={["#092C21"]}/>

      <ambientLight intensity={2}/>
      <Environment preset={'warehouse'}/>
      <Sparkles ref={sparkles} scale={10} count={1000} color={'#00ff00'} size={1} speed={2} />


      <Float>
        <Disc/>
      </Float>
    </>
  )
}

export default Experience;