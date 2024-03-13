"use client";
import {
  CatalogFormats,
  CatalogSeasons,
  CatalogGenreSelect,
  CatalogType,
  CatalogStatus,
} from "@/app/lib/constance/consts";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import Select from "react-select";
import SidebarCheckBoxes from "./SidebarCheckBoxes";
const CatalogSidebar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);  

  const setFilter = (e: any) => {
    const data = e.map((item:any) => item.value) 
    console.log(data);
    params.set('genres',JSON.stringify(data));
    replace(`${pathname}?${decodeURIComponent(params.toString())}`,{scroll:false})
  };
  return (
    <aside className="border  rounded-md">
      <div className="px-3 py-5">
        <h2 className="text-2xl font-bold mb-1">Filters</h2>
        <p className="text-secondary-foreground text-[16px]">
          Use filters to find anime based on your interests
        </p>
        <div className="flex flex-col gap-y-6">
          <label>
            <h3 className="font-bold  my-3  ">Genres</h3>
            <Select
              instanceId={useId()}
              onChange={setFilter}
              placeholder="Select Genres..."
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              isMulti
              name="genres"
              options={CatalogGenreSelect}
            />
          </label>
          <label>
            <h3 className="font-bold  mb-3">Format</h3>
            <SidebarCheckBoxes name={"format"} checkboxes={CatalogFormats} />
          </label>

          <label>
            <h3 className="font-bold  mb-3">Season</h3>
            <SidebarCheckBoxes name={"season"} checkboxes={CatalogSeasons} />
          </label>

          <label>
            <h3 className="font-bold  mb-3">Type</h3>
            <SidebarCheckBoxes name={"type"} checkboxes={CatalogType} />
          </label>

          <label>
            <h3 className="font-bold  mb-3">Status</h3>
            <SidebarCheckBoxes name={"status"} checkboxes={CatalogStatus} />
          </label>
        </div>
      </div>
    </aside>
  );
};

export default CatalogSidebar;
