import Disc from "./Disc.jsx";
import {Environment, Float} from "@react-three/drei";
import {Perf} from "r3f-perf";
import PostProcessing from "./PostProcessing.jsx";

const Experience = () => {
  return (
    <>

      <Perf position={'top-left'}/>
      <PostProcessing/>

      {/* ENVIRONMENT */}
      <Environment preset={'warehouse'} />
      <ambientLight />
      <color attach="background" args={["#092C21"]}/>

      <Float speed={3}>
        <Disc/>
      </Float>
    </>
  )
}

export default Experience;