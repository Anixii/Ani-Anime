import React from "react";
type DefinePageType = { 
  params:{ 
    id?:number | string
  }
}
const DefinePage:React.FC<DefinePageType> = ({params}) => {
  

  return <main></main>;
};

export default DefinePage;
