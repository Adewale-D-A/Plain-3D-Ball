import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Deg2Rad from "./degToRad";

const Camera = (props) => {
  const OrbitCamera = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;
    OrbitCamera.current.setAzimuthalAngle(-(x * Deg2Rad(45)));
    OrbitCamera.current.setPolarAngle((y + 0.75) * Deg2Rad(90 - 30));
    OrbitCamera.current.update();
  });
  return (
    <>
      <PerspectiveCamera {...props} makeDefault />
      <OrbitControls
        ref={OrbitCamera}
        maxAzimuthAngle={Deg2Rad(20)}
        minAzimuthAngle={-Deg2Rad(20)}
        maxPolarAngle={Deg2Rad(60)}
        minPolarAngle={Deg2Rad(30)}
        enableZoom={false}
      />
    </>
  );
};

export default Camera;
