import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from '@react-three/postprocessing';

import Loader from './Loader';
import DroneSL from './DroneSL';
import DroneModel from './Drone/DroneModel';
import Camera from './Camera';
import AmbientLight from './AmbientLight';
import FloorModel from './FloorModel';
import FogModel from './FogModel';
import DroneSL2 from './DroneSL2';

export default function DroneComposition() {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <color attach="background" args={['#050505']} />
      <Suspense fallback={<Loader />}>
        <DroneModel />
        <FloorModel />

        <FogModel />

        {/* <AmbientLight /> */}
        <DroneSL />
        <DroneSL2 />

        <Camera />
        {/* <OrbitControls /> */}

        <EffectComposer>
          <Bloom intensity={0.5} />
          <DepthOfField
            focusDistance={0.005}
            focalLength={0.01}
            bokehScale={4}
            height={480}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
