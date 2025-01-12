import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import PostProcessing from "./components/PostProcessing.jsx";
import {Suspense} from "react";
import Loader from "./components/Loader.jsx";

function App() {

  return (
    <>
      {/* R3F */}
      <Canvas
        dpr={[1, 1]}
        className="z-0"
      >
        <color attach="background" args={["#092C21"]}/>
        <Suspense fallback={null}>
          <Experience/>
          <PostProcessing/>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}

export default App

// si on est sur desktop, ça dézoome l'écran en un macbook puis qu'on slide vers la droite pour ensuite zoomer sur la scene
// si on est sur mobile, ça dézoome l'écran en un iphone puis qu'on slide vers la droite pour ensuite zoomer sur la scene