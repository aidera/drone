import { ObjectMap } from '@react-three/fiber';
import {
  Material,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from 'three';
import { GLTF } from 'three/examples/jsm/Addons.js';

export const setMaterials = (model: GLTF & ObjectMap) => {
  model.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      if ((mesh.material as Material).name === 'Lense') {
        mesh.material = new MeshPhysicalMaterial({
          color: '#21381D',
          roughness: 0,
          transmission: 1,
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
};
