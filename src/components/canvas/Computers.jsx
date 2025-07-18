import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* 🧠 Improved lights for mobile visibility */}
      <hemisphereLight intensity={1} groundColor="black" />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize={512}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3.2, -2.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  // ✅ Safety check for mobile fallback
  const isLowEndMobile = isMobile && window.devicePixelRatio <= 1.5;

  return isLowEndMobile ? (
    // 🖼️ Fallback image if Android device can't handle WebGL well
    <div className="w-full h-[350px] flex justify-center items-center">
      <img
        src="/fallback.jpg"
        alt="Static preview"
        className="object-contain w-[250px] h-[250px]"
      />
    </div>
  ) : (
    <Canvas
      dpr={[1, 1.5]} // 🔧 limit devicePixelRatio for performance
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
