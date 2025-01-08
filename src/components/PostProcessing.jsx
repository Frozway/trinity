import {
  DotScreen,
  EffectComposer,
  Glitch
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";

const PostProcessing = () => {
  return (
    <>
      <EffectComposer multisampling={1}>
        <Glitch
          delay={3}
          duration={[0.3, 0.5]}
          strength={[0.3, 0.5]}
          mode={GlitchMode.SPORADIC}
          ratio={0.85}
        />
        <DotScreen
          blendFunction={BlendFunction.LIGHTEN}
          angle={Math.PI * 0.5}
          scale={1.2}
        />
      </EffectComposer>
    </>
  );
}

export default PostProcessing;