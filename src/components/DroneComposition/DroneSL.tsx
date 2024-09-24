import { useRef } from 'react';
import { SpotLight } from 'three';

export default function DroneSL() {
  const lightRef = useRef<SpotLight>(null);

  return (
    <spotLight
      ref={lightRef}
      castShadow={true}
      position={[-8, 10, 10]}
      intensity={700}
      color={'#FFF4DE'}
      distance={50}
      angle={Math.PI / 8}
      penumbra={1}
    />
  );
}
