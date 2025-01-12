import {EffectComposer, Glitch, Scanline} from "@react-three/postprocessing";
import {BlendFunction, GlitchMode} from "postprocessing";

const PostProcessing = () => {
  return (
    <>
      <EffectComposer multisampling={1}>
        <Glitch
          delay={3}
          duration={[0.3, 0.5]}
          strength={[0.3, 0.8]}
          mode={GlitchMode.SPORADIC}
          ratio={0.85}
        />
        <Scanline
          blendFunction={BlendFunction.OVERLAY}
          density={1.9}
          opacity={0.2}
        />
      </EffectComposer>
    </>
  );
}

export default PostProcessing;