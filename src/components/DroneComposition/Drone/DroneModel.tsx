import { useEffect, useRef, useState } from 'react';
import { ThreeElements, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { setMaterials } from './materials';
import {
  addMouseMoveRotation,
  runDroneTurnOnAnimation,
  setDroneInitialAnimationPositions,
} from './animations';

export default function DroneModel() {
  const [canBeControlled, setCanBeControlled] = useState<boolean>(false);
  const droneRef = useRef<ThreeElements['primitive']>();
  const droneModel = useLoader(GLTFLoader, '/drone.glb');

  useEffect(() => {
    if (droneModel) {
      console.log(droneModel);
      setMaterials(droneModel);
      setDroneInitialAnimationPositions(droneModel);

      setTimeout(() => {
        runDroneTurnOnAnimation(droneModel, () => {
          setCanBeControlled(true);
        });
      }, 1000);
    }
  }, [droneModel]);

  useEffect(() => {
    if (canBeControlled) {
      const removeMouseMoveRotation = addMouseMoveRotation(droneModel);

      return () => {
        removeMouseMoveRotation();
      };
    }
  }, [canBeControlled]);

  return (
    <group rotation={[0, -Math.PI / 8, 0]}>
      <primitive object={droneModel.scene} ref={droneRef} />
    </group>
  );
}
