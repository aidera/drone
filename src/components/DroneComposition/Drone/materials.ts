import { ObjectMap } from '@react-three/fiber';
import {
  Material,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from 'three';
import { GLTF } from 'three/examples/jsm/Addons.js';

export const setMaterials = (model: GLTF & ObjectMap): GLTF & ObjectMap => {
  model.scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      if ((mesh.material as Material).name === 'Lense') {
        mesh.material = new MeshPhysicalMaterial({
          color: '#21381D',
          roughness: 0,
          transmission: 0.5,
          opacity: 0.5,
          transparent: true,
          reflectivity: 1,
          ior: 1.5,
          clearcoat: 1,
          clearcoatRoughness: 0,
        });
      }

      if ((mesh.material as Material).name === 'Lighter') {
        mesh.material = new MeshStandardMaterial({
          color: '#FFFFFF',
          emissive: '#64FFFA',
          emissiveIntensity: 0.05,
          name: 'Lighter',
          roughness: 1,
        });
      }
    }
  });

  return model;
};
