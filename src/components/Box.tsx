import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import image from "../source/galaxy.jpg";

export default function Box(props: any) {
  const refs: any = useRef();

  const texture = useLoader(TextureLoader, image);

  useFrame((state, delta) => {
    refs.current.rotation.x -= 10 * delta;
    // refs.current.rotation.y += 1 * delta;
    // refs.current.rotation.z += 1 * delta;

    // refs.current!.position.x += 0.25 * delta;
    // refs.current.position.y += Math.sin((state.clock.getElapsedTime()) / 0.1);
    refs.current!.position.z -= 1 * delta;
  });

  return (
    <mesh {...props} ref={refs}>
      <sphereGeometry />
      <meshBasicMaterial map={texture} color="white" opacity={0.5} />
    </mesh>
  );
}
