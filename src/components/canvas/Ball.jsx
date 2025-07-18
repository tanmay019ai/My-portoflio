import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import * as THREE from 'three';
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal, setDecal] = useState(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      imgUrl,
      (texture) => setDecal(texture),
      undefined,
      (err) => {
        console.error("❌ Texture failed to load:", err);
        setDecal(null); // avoid NaN issue
      }
    );
  }, [imgUrl]);

  if (!decal) {
    return null; // skip rendering if texture is not available
  }

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false} // keep it smooth
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
