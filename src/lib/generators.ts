import * as THREE from "three";

export const generateVertecies = (count: number) => {
   const length = count * Math.pow(3, 2);

   const positionsArray = new Float32Array(length);

   for (let i = 0; i < length; i++) {
      positionsArray[i] = 5 * (Math.random() - 0.5);
   }

   const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

   return positionsAttribute;
};
