import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Camera from "./components/camera";
import Deg2Rad from "./components/degToRad";
import Evn from "./components/environment";
import LightDisplay from "./components/lights";
import Plane from "./components/plane";
import Sphere from "./components/shape";
import SusHtml from "./components/suspenseHtml";

function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <Suspense fallback={<SusHtml />}>
          <Camera position={[0, 1, 5]} />
          <LightDisplay />
          <Sphere position={[0, 0.5, 0]} />
          <Plane rotation={[-Deg2Rad(90), 0, 0]} />
          <Evn />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
