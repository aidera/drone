import { ObjectMap } from '@react-three/fiber';
import { GLTF } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';

export const setDroneInitialAnimationPositions = (model: GLTF & ObjectMap) => {
  const spinners = [
    model.scene.getObjectByName('Spinner001'),
    model.scene.getObjectByName('Spinner002'),
    model.scene.getObjectByName('Spinner003'),
    model.scene.getObjectByName('Spinner004'),
  ];

  spinners.forEach((spinner, index) => {
    if (spinner) {
      gsap.set(spinner.rotation, {
        y: '+=' + 0.15 * index,
      });
    }
  });
};

export const runDroneTurnOnAnimation = (
  model: GLTF & ObjectMap,
  onStarted: () => void
) => {
  /** Spinners */
  const spinners = [
    model.scene.getObjectByName('Spinner001'),
    model.scene.getObjectByName('Spinner002'),
    model.scene.getObjectByName('Spinner003'),
    model.scene.getObjectByName('Spinner004'),
  ];

  spinners.forEach((spinner, index) => {
    if (spinner) {
      gsap.to(spinner.rotation, {
        y: '+=' + Math.PI * 4,
        duration: 1,
        ease: 'power1.in',
        delay: index * 0.1,
        onComplete: () => {
          gsap.to(spinner.rotation, {
            y: '+=' + Math.PI * 2,
            duration: 0.2,
            repeat: -1,
            ease: 'linear',
          });
        },
      });
    }
  });

  /** Object */

  gsap.to(model.scene.position, {
    y: 1,
    delay: 1,
    duration: 2,
    ease: 'power1.inOut',
    onComplete: () => {
      onStarted();
      runIdleAnimation(model);
    },
  });

  gsap
    .timeline()
    .to(model.scene.rotation, {
      x: -0.08,
      delay: 0.6,
      duration: 0.5,
      ease: 'power1.inOut',
    })

    .to(model.scene.rotation, {
      x: 0,
      duration: 1.4,
      ease: 'back.inOut(1)',
    });

  gsap
    .timeline()
    .to(model.scene.rotation, {
      y: -0.05,
      delay: 0.8,
      duration: 0.5,
      ease: 'power1.inOut',
    })
    .to(model.scene.rotation, {
      y: 0,
      duration: 1.4,
      ease: 'power1.inOut',
    });
};

export const runIdleAnimation = (model: GLTF & ObjectMap) => {
  gsap.to(model.scene.position, {
    y: '-=0.1',
    duration: 1.5,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
  });
};

export const addMouseMoveRotation = (model: GLTF & ObjectMap) => {
  const handleMouseMove = (event: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const mouseX = (event.clientX / innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / innerHeight) * 2 + 1;

    gsap.to(model.scene.rotation, {
      x: mouseY * -0.05,
      y: mouseX * 0.5,
      duration: 0.3,
      ease: 'power1.out',
      overwrite: true,
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};
