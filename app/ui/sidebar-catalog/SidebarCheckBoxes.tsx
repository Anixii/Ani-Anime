import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
type SidebarCheckBoxesPropsType = {
  checkboxes: Array<{ name: string; value: string }>; 
  name: string
};
const SidebarCheckBoxes: React.FC<SidebarCheckBoxesPropsType> = ({
  checkboxes, 
  name,
}) => { 
    const [value,setInnerValue] = useState('') 
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter(); 
    const params = new URLSearchParams(searchParams);  
    const setFilter = (name:string,value:string) =>{  
      setInnerValue(value)
      params.set(name,value);
      replace(`${pathname}?${decodeURIComponent(params.toString())}`,{scroll:false})
    } 
    useEffect(() =>{  
      let data = params.get(name) 
      setInnerValue(data || '')
    },[name])
  return (
    <div className="flex flex-wrap gap-2">
      {checkboxes.map((item, index) => (
        <label className="w-[48%] flex gap-x-2 items-center" key={index}>
          <input  
            onChange={() => setFilter(name,item.value)}
            checked={item.value === value}
            type="radio"
            value={item.value}
            name={name}
            id={item.value}
          />
          <h5>{item.name}</h5>
        </label>
      ))}
    </div>
  );
};

export default SidebarCheckBoxes;
