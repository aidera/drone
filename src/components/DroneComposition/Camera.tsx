import { useRef, useEffect } from 'react';
import { PerspectiveCamera as DreiPerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera } from 'three';

export default function Camera() {
  const cameraRef = useRef<PerspectiveCamera>(null);

  useEffect(() => {
    const updateCameraPosition = () => {
      if (cameraRef.current) {
        if (window.innerWidth <= 830) {
          cameraRef.current.position.x = -0.5;
        } else {
          cameraRef.current.position.x = -4;
        }
      }
    };

    // Initial check
    updateCameraPosition();

    // Add event listener
    window.addEventListener('resize', updateCameraPosition);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCameraPosition);
    };
  }, []);

  return (
    <DreiPerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={40}
      position={[-4, 5, 12]}
      rotation={[-0.2, 0, 0]}
    />
  );
}
