import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "../../shapes/Box";
import Particles from "../../shapes/Particles";

const Scene = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const cameraRef = useRef<THREE.PerspectiveCamera>(null);
   // State
   const [dpr, setDpr] = useState<number>(1);

   // Actions
   const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
         canvasRef.current?.requestFullscreen();
      } else {
         document.exitFullscreen();
      }
   };

   useEffect(() => {
      if (window !== undefined) {
         setDpr(Math.min(window.devicePixelRatio, 2));
      }
   }, []);

   return (
      <Canvas ref={canvasRef} dpr={dpr} onDoubleClick={toggleFullScreen}>
         <color attach="background" args={[0, 0, 0]} />
         <perspectiveCamera ref={cameraRef} fov={55} near={0.1} far={1000} position={[0, 0, 3]} />
         <directionalLight intensity={0.5} color={new THREE.Color(0xffffff)} />
         <ambientLight intensity={0.4} color={new THREE.Color(0xffffff)} />
         <OrbitControls enableDamping />
         <Suspense fallback={<p>Loading...</p>}>
            <Box />
            {/* <Particles /> */}
         </Suspense>
      </Canvas>
   );
};

export default Scene;
