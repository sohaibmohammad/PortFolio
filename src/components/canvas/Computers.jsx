import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


import React, { Suspense ,useEffect,useState } from 'react';
import { design } from '../../assets';
import Loader from '../Loader';

const Background = ({isMobile})=>{
  return (
    <mesh>
      <Sphere args={[1,100,300]} scale={isMobile? 0.5:3.5}>
      <MeshDistortMaterial
      color="#663b87"
      attach="material"
      distort={0.5}
      speed={2}
      />
      <spotLight position={[-20,50,10]}
      angle={0.15}
      penumbra={1}/>
      </Sphere>
     

    </mesh>
  )
}

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:0px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange =(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return (
     <div className='flex justify-center items-center px-16 w-1/2'>
      <div className='relative w-full max-w-lg h-[450px]'>
      
      <Canvas
      
      camera={{ position:[20,10,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<Loader/>}>
          <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}/>
        </Suspense>
        <OrbitControls enableZoom={false}/>
        <directionalLight position={[3,2,1]}/>
        <Background isMobile={isMobile}/>
        
      </Canvas>
      
      </div>
      </div>
    
  )
}

export default Computers