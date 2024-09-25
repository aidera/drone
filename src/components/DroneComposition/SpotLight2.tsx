import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { PCFSoftShadowMap, SpotLight } from 'three';

export default function SpotLight2() {
  const lightRef = useRef<SpotLight>(null);

  const { gl } = useThree();

  useEffect(() => {
    if (lightRef.current) {
      // Optimize shadow map size
      lightRef.current.shadow.mapSize.width = 512;
      lightRef.current.shadow.mapSize.height = 512;

      // Adjust shadow camera settings
      lightRef.current.shadow.camera.near = 8;
      lightRef.current.shadow.camera.far = 30;

      // Adjust shadow bias
      lightRef.current.shadow.bias = -0.0001;

      // Set shadow map type
      gl.shadowMap.enabled = true;
      gl.shadowMap.type = PCFSoftShadowMap;
    }
  }, [gl]);

  return (
    <spotLight
      ref={lightRef}
      castShadow={true}
      position={[8, 12, 10]}
      intensity={1500}
      color={'#8CC4FF'}
      distance={32}
      angle={Math.PI / 8}
      penumbra={1}
    />
  );
}
