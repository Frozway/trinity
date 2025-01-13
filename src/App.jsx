import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import PostProcessing from "./components/PostProcessing.jsx";
import {Suspense} from "react";
import Loader from "./components/Loader.jsx";
import Overlay from "./components/Overlay.jsx";

function App() {

  return (
    <>
      <Canvas dpr={[1, 1]} className="z-0">
        <color attach="background" args={["#092C21"]}/>
        <Suspense fallback={null}>
          <Experience/>
          <PostProcessing/>
        </Suspense>
      </Canvas>

      <Loader />
      <Overlay />
    </>
  )
}

export default App