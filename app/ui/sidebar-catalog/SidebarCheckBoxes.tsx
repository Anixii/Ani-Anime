import React from "react";
type SidebarCheckBoxesPropsType = {
  checkboxes: Array<{ name: string; value: string }>; 
  currentValue: string | undefined 
  setValue: (value:string) => void 
  name: string
};
const SidebarCheckBoxes: React.FC<SidebarCheckBoxesPropsType> = ({
  checkboxes, 
  currentValue,  
  name,
  setValue
}) => { 
    console.log(currentValue);
    
  return (
    <div className="flex flex-wrap gap-2">
      {checkboxes.map((item, index) => (
        <label  className="w-[48%] flex gap-x-2 items-center" key={index}>
          <input  
            onClick={() => setValue(item.value)}
            checked={item.value === currentValue}
            className=""
            type="radio"
            value={item.value}
            name={item.name}
            id={item.value}
          />
          <h5>{item.name}</h5>
        </label>
      ))}
    </div>
  );
};

export default SidebarCheckBoxes;
