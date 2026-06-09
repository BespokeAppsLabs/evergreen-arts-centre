"use client";

import { Environment, Float, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";

function Sculpture() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/evergreen-arts-sculpture.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.play());
  }, [actions]);

  useFrame(({ pointer }) => {
    if (!group.current) return;
    group.current.rotation.y +=
      (pointer.x * 0.14 - group.current.rotation.y) * 0.025;
    group.current.rotation.x +=
      (-pointer.y * 0.06 - group.current.rotation.x) * 0.025;
  });

  return <primitive object={scene} ref={group} scale={0.84} position={[0, -2.2, 0]} />;
}

export function SculptureScene() {
  return (
    <div className="sculpture-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.2, 8], fov: 37 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.1} />
        <directionalLight color="#ffb12b" intensity={4} position={[-4, 4, 5]} />
        <pointLight color="#168e4b" intensity={12} position={[4, 1, 2]} />
        <Suspense fallback={null}>
          <Float floatIntensity={0.35} rotationIntensity={0.12} speed={1.2}>
            <Sculpture />
          </Float>
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/evergreen-arts-sculpture.glb");
