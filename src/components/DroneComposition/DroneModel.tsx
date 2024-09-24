import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import {
  Material,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from 'three';
import { useEffect, useRef } from 'react';

export default function DroneModel() {
  const droneRef = useRef<ThreeElements['primitive']>();
  const droneModel = useLoader(GLTFLoader, '/drone.glb');

  useEffect(() => {
    if (droneModel) {
      droneModel.scene.traverse((child) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          if ((mesh.material as Material).name === 'Lense') {
            mesh.material = new MeshPhysicalMaterial({
              color: '#21381D',
              metalness: 0,
              roughness: 0,
              transmission: 0.7,
              opacity: 1,
              transparent: true,
              reflectivity: 0.9,
              ior: 1.5,
              clearcoat: 1,
              clearcoatRoughness: 0,
            });
          }

          if ((mesh.material as Material).name === 'Lighter') {
            mesh.material = new MeshStandardMaterial({
              color: '#64FFFA',
              emissive: '#64FFFA',
              emissiveIntensity: 5,
            });
          }
        }
      });
      console.log(droneModel);
    }
  }, [droneModel]);

  return (
    <group rotation={[0, -Math.PI / 8, 0]}>
      <primitive object={droneModel.scene} ref={droneRef} />
    </group>
  );
}
