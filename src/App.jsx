import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience.jsx";

function App() {

  return (
    <>
      {/* R3F */}
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
