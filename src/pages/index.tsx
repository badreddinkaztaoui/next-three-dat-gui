import type { NextPage } from "next";
import Scene from "../containers/Canvas";
import Gui from "../containers/Gui";

const Home: NextPage = () => {
   return (
      <div className="canvas">
         <Gui />
         <Scene />
      </div>
   );
};

export default Home;
