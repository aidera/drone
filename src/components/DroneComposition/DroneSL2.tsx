import { useRef } from 'react';
import { SpotLight } from 'three';

export default function DroneSL2() {
  const lightRef = useRef<SpotLight>(null);

  return (
    <spotLight
      ref={lightRef}
      castShadow={true}
      position={[8, 12, 10]}
      intensity={1500}
      color={'#8CC4FF'}
      distance={50}
      angle={Math.PI / 8}
      penumbra={1}
    />
  );
}
