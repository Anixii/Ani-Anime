import { NotFoundLoop } from "@/app/assets/Group";
import React from "react";

const SearchNotFound = () => {
  return (
    <article className="w-full h-full">
      <div className="flex my-9 items-center overflow-hidden flex-col">
        <NotFoundLoop className={'h-[280px] w-auto'} />
        <div className="mt-[5%]">
          <h2 className="font-bold text-3xl text-center mb-2">No results found</h2>
          <h3 className="font-medium text-2xl text-center">
            Try a different query or filters
          </h3>
        </div> 
      </div>
    </article>
  );
};

export default SearchNotFound;
