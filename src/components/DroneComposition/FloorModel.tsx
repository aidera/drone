import React, { useRef, useEffect } from 'react';
import { Reflector } from 'three/examples/jsm/Addons.js';
import { Mesh } from 'three';

export default function FloorModel() {
  const reflectorRef = useRef<Mesh>(null);

  useEffect(() => {
    // if (reflectorRef.current) {
    //   const reflector = new Reflector(reflectorRef.current.geometry, {
    //     clipBias: 0.1,
    //     textureWidth: window.innerWidth * window.devicePixelRatio,
    //     textureHeight: window.innerHeight * window.devicePixelRatio,
    //     color: 0x777777,
    //   });
    //   reflectorRef.current.add(reflector);
    // }
  }, []);

  return (
    <mesh
      receiveShadow={true}
      ref={reflectorRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        color="#000"
        roughness={0.5}
        polygonOffset={true}
        polygonOffsetFactor={-1}
        polygonOffsetUnits={-1}
      />
    </mesh>
  );
}
