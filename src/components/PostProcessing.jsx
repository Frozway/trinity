import {EffectComposer, Glitch} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";

const PostProcessing = () => {
  return (
    <>
      <EffectComposer multisampling={1}>
        <Glitch
          delay={3} // min and max glitch delay
          duration={[0.3, 0.5]} // min and max glitch duration
          strength={[0.3, 0.5]} // min and max glitch strength
          mode={GlitchMode.SPORADIC} // glitch mode
          ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
      </EffectComposer>
    </>
  );
}

export default PostProcessing;