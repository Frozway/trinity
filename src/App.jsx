import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience.jsx";

function App() {

  return (
    <>
      {/* R3F */}
      <Canvas
        dpr={ [1, 2] }
        camera={ {position: [-10, -10, 2]} }
      >
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
