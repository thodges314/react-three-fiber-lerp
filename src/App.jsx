import { Canvas, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { Stats, Environment, Center } from "@react-three/drei";
import Button from "./Button";

const vec = new Vector3();

const Rig = () =>
  useFrame(({ camera, mouse }) => {
    vec.set(mouse.x * 2, mouse.y * 2, camera.position.z);
    camera.position.lerp(vec, 0.025);
    camera.lookAt(0, 0, 0);
  });

const App = () => (
  <Canvas camera={{ position: [0, 0, 5] }}>
    <Environment preset="forest" background />
    <Center>
      {[...Array(5).keys()].map((x) =>
        [...Array(3).keys()].map((y) => (
          <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
        ))
      )}
    </Center>
    <Rig />
    <Stats />
  </Canvas>
);

export default App;
