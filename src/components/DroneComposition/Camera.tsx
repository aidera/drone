import { useRef } from 'react';
import { PerspectiveCamera as DreiPerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera } from 'three';

export default function Camera() {
  const cameraRef = useRef<PerspectiveCamera>(null);

  return (
    <DreiPerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={40}
      position={[-4, 5, 12]}
      rotation={[-0.2, 0, 0]}
    />
  );
}
