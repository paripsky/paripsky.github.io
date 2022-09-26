import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Text, TrackballControls } from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import skills from '../constants/skills';
import { hasMouse } from '../utils/hasMouse';
import { openURLInNewTab } from '../utils/openURL';
import shuffle from '../utils/shuffle';

export type WordProps = {
  hoverColor: string;
  href: string;
  position: THREE.Vector3;
  children?: React.ReactNode;
};

const Word: React.FC<WordProps> = ({ children, hoverColor, href, ...props }) => {
  const color = new THREE.Color();
  const textColor = useColorModeValue('black', 'white');
  const isUsingMouse = hasMouse();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef<THREE.Mesh>();
  const [hovered, setHovered] = useState(false);
  const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = 'pointer';
    }

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);

  useFrame(({ camera }) => {
    if (!ref.current) return;
    ref.current.quaternion.copy(camera.quaternion);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ref.current.material as any).color.lerp(
      color.set(hovered ? hoverColor : textColor),
      0.1,
    );
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => openURLInNewTab(href)}
      onPointerUp={() => !isUsingMouse && openURLInNewTab(href)}
      {...props}
      {...fontProps}>
      {children}
    </Text>
  );
};

export type CloudProps = {
  count: number;
  radius: number;
};

const Cloud: React.FC<CloudProps> = ({ count = 4, radius = 20 }) => {
  const { colorMode } = useColorMode();
  const skillsList = useMemo(() => shuffle(skills(colorMode)), [colorMode]);

  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    let wordIndex = 0;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++, wordIndex++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          skillsList[wordIndex]?.['aria-label'],
          skillsList[wordIndex]?.hoverColor,
          skillsList[wordIndex]?.href,
        ] as const);
      }
    return temp;
  }, [count, radius, skillsList]);

  return (
    <group>
      {words.map(([pos, word, hoverColor, href], index) => (
        <Word key={index} position={pos} hoverColor={hoverColor} href={href}>
          {word}
        </Word>
      ))}
    </group>
  );
};

const SkillsSphere: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud count={7} radius={20} />
      <TrackballControls />
    </Canvas>
  );
};

export default SkillsSphere;
