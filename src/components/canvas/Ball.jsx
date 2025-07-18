import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Detect low-end Android device
const isLowEndAndroid = () => {
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = ua.includes("android");
  const lowRAM = navigator.deviceMemory && navigator.deviceMemory <= 2;
  const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  return isAndroid && (lowRAM || lowCPU);
};

const Ball = ({ imgUrl, isLow }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.5]} intensity={1} />
      <mesh castShadow receiveShadow scale={isLow ? 2.3 : 2.75}>
        <icosahedronGeometry args={[1, isLow ? 0 : 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
          roughness={0.3}
          metalness={0.1}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
          anisotropy={16}
        />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isLow, setIsLow] = useState(false);

  useEffect(() => {
    setIsLow(isLowEndAndroid());
  }, []);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isLow={isLow} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
