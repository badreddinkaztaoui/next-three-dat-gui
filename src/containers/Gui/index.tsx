import DatGui, { DatColor, DatFolder, DatNumber } from "react-dat-gui";
import { guiItemsStore, GuiTypes } from "../../store/gui";

const Gui = () => {
   const twiks = guiItemsStore((state: GuiTypes) => state.box);
   const setTwiks = guiItemsStore((state: GuiTypes) => state.setBox);

   return (
      <DatGui className="gui" data={twiks} onUpdate={setTwiks}>
         <DatFolder title="Box" closed={false}>
            <DatNumber path="position.x" label="X position" min={-5} max={5} step={0.01} />
            <DatNumber path="position.y" label="Y position" min={-5} max={5} step={0.01} />
            <DatNumber path="position.z" label="Z position" min={-5} max={5} step={0.01} />
            <DatColor path="color" />
         </DatFolder>
      </DatGui>
   );
};

export default Gui;
