import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { guiItemsStore, GuiTypes } from "../../store/gui";

const Box = () => {
   const boxRef = useRef<THREE.Mesh>(null);

   const {
      position: { x, y, z },
      color,
   } = guiItemsStore((state: GuiTypes) => state.box);

   useFrame(({ clock }) => {
      if (boxRef.current) {
         boxRef.current.rotation.x = 0.5 * clock.getElapsedTime();
         boxRef.current.rotation.y = 0.5 * clock.getElapsedTime();
      }
   });

   return (
      <mesh ref={boxRef} userData={{ name: "box" }} position={[x, y, z]}>
         <boxGeometry attach="geometry" args={[1, 1, 1]} />
         <meshStandardMaterial attach="material" color={color} />
      </mesh>
   );
};

export default Box;
