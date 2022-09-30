import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Deg2Rad from "./degToRad";

const LightDisplay = () => {
  const spotLight = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;
    spotLight.current.position.y = (y + 2) * Deg2Rad(180);
    spotLight.current.position.x = x * 3 * Deg2Rad(270);
  });

  return (
    <>
      <spotLight
        ref={spotLight}
        color={"red"}
        distance={10}
        castShadow
        position={[0, 0.5, 0]}
        intensity={5}
        angle={0.5}
        penumbra={0.5}
        attenuation={5}
        anglePower={4}
      />
      <directionalLight
        args={["white", 1]}
        position={[1, 0.5, 0]}
        intensity={0.4}
        castShadow
      />
      <ambientLight intensity={0.1} />
    </>
  );
};

export default LightDisplay;
