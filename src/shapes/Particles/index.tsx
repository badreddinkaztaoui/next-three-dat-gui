import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { generateVertecies } from "../../lib/generators";

const Particles = () => {
   const geomRef = useRef<THREE.BufferGeometry>(null);

   useLayoutEffect(() => {
      if (geomRef.current) {
         geomRef.current.setAttribute("position", generateVertecies(100));
      }
   }, []);

   return (
      <mesh>
         <bufferGeometry attach="geometry" ref={geomRef} />
         <meshBasicMaterial attach="material" color={new THREE.Color(0xff0000)} wireframe />
      </mesh>
   );
};

export default Particles;
