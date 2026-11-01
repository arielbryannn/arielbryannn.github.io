import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useTexture } from '@react-three/drei';
import { Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import * as THREE from 'three';
import CardDesignImage from '../assets/lanyard.png'; // Mengambil dari folder assets

export default function Lanyard() {
  return (
    <div className="relative w-full h-[520px] flex justify-center items-center pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 45 }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), 0)}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <Physics gravity={[0, -30, 0]} timeStep="vary">
          <LanyardRopeAndCard />
        </Physics>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function LanyardRopeAndCard() {
  const fixedRef = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const cardRef = useRef();

  const [dragged, setDragged] = useState(false);
  const vec = new THREE.Vector3();

  // Memuat tekstur gambar lanyard dari assets
  const cardTexture = useTexture(CardDesignImage);

  useSphericalJoint(fixedRef, j1, [[0, 0, 0], [0, 0.5, 0]]);
  useSphericalJoint(j1, j2, [[0, -0.5, 0], [0, 0.5, 0]]);
  useRopeJoint(j2, cardRef, [[0, -0.5, 0], [0, 2.3, 0], 1.2]);

  useFrame((state) => {
    if (dragged) {
      vec.set(
        (state.pointer.x * state.viewport.width) / 2,
        (state.pointer.y * state.viewport.height) / 2,
        0
      );
      cardRef.current?.setNextKinematicTranslation(vec);
    }
  });

  return (
    <group position={[0, 2.5, 0]}>
      <RigidBody ref={fixedRef} type="fixed" position={[0, 1.5, 0]} />

      <RigidBody ref={j1} linearDamping={3} angularDamping={3} position={[0, 0.8, 0]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 0.8, 16]} />
          <meshStandardMaterial color="#222222" roughness={0.3} />
        </mesh>
      </RigidBody>

      <RigidBody ref={j2} linearDamping={3} angularDamping={3} position={[0, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[0.06, 0.06, 0.8, 16]} />
          <meshStandardMaterial color="#222222" roughness={0.3} />
        </mesh>
      </RigidBody>

      <RigidBody
        ref={cardRef}
        type={dragged ? 'kinematicPosition' : 'dynamic'}
        enabledRotations={[true, true, true]}
        linearDamping={2}
        angularDamping={2}
        position={[0, -2, 0]}
      >
        <group
          onPointerDown={(e) => {
            e.stopPropagation();
            e.target.setPointerCapture(e.pointerId);
            setDragged(true);
          }}
          onPointerUp={(e) => {
            e.stopPropagation();
            e.target.releasePointerCapture(e.pointerId);
            setDragged(false);
          }}
        >
          {/* Kartu ID Depan (Desain Lanyard Kamu) */}
          <mesh position={[0, 0, 0.04]}>
            <planeGeometry args={[3.2, 4.6]} />
            <meshBasicMaterial map={cardTexture} transparent={true} />
          </mesh>

          {/* Sisi Belakang Kartu */}
          <mesh castShadow receiveShadow>
            <boxGeometry args={[3.3, 4.7, 0.06]} />
            <meshStandardMaterial color="#140624" roughness={0.2} metalness={0.8} />
          </mesh>

          {/* Klip Besi */}
          <mesh position={[0, 2.4, 0]}>
            <boxGeometry args={[0.8, 0.2, 0.1]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      </RigidBody>
    </group>
  );
}