import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Environment } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  
  return ( 
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]} // دعم دقة الشاشات العالية (Retina) لتكون الحواف ناعمة
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={1.0} // سرعة دوران هادئة ومريحة للعين
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* إضاءة محيطية هادئة */}
        <ambientLight intensity={0.8} />
        
        {/* إضاءة توجيهية (مسلطة) لإبراز تفاصيل الكوكب والعمق */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        
        {/* بيئة افتراضية لإعطاء انعكاسات واقعية على سطح الكوكب */}
        <Environment preset="city" />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;