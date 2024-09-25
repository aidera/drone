import { useRef, useEffect } from 'react';
import { PCFSoftShadowMap, SpotLight } from 'three';
import { useThree } from '@react-three/fiber';

export default function SpotLight1() {
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
      gl.shadowMap.type = PCFSoftShadowMap; // or THREE.VSMShadowMap
    }
  }, [gl]);

  return (
    <spotLight
      ref={lightRef}
      castShadow={true}
      position={[-8, 10, 10]}
      intensity={700}
      color={'#FFF4DE'}
      distance={30}
      angle={Math.PI / 8}
      penumbra={1}
    />
  );
}
