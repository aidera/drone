import { useRef, useEffect } from 'react';
import { PCFSoftShadowMap, SpotLight } from 'three';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

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

      // GSAP animation 
      gsap.to(lightRef.current.position, {
        x: lightRef.current.position.x + 4,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut'
      });
    }
  }, [gl]);

  return (
    <spotLight
      ref={lightRef}
      castShadow={true}
      position={[-8, 10, 10]}
      intensity={1100}
      color={'#FFFAF1'}
      distance={30}
      angle={Math.PI / 8}
      penumbra={1}
    />
  );
}
