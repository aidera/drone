import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { PCFSoftShadowMap, SpotLight } from 'three';
import gsap from 'gsap';

export default function SpotLight3() {
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

      // GSAP animation
      gsap.to(lightRef.current.position, {
        x: 100,
        duration: 3,
        repeat: -1,
        repeatDelay: 6,
        delay: 4,
        ease: 'linear',
        yoyo: false,
      });
    }
  }, [gl]);

  return (
    <spotLight
      ref={lightRef}
      castShadow={true}
      position={[-100, 12, 8]}
      intensity={400}
      color={'#8CC4FF'}
      distance={32}
      angle={Math.PI / 2}
      penumbra={1}
    />
  );
}
