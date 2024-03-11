"use client";
import { CatalogFormats,CatalogSeasons, CatalogGenreSelect, CatalogType, CatalogStatus } from "@/app/lib/constance/consts";
import React, { useState } from "react";
import Select from "react-select";
import SidebarCheckBoxes from "./SidebarCheckBoxes";
const CatalogSidebar = () => { 
    const [currentFormat, setCurrentFormat] = useState('')
    const [currentSeason, setCurrentSeason] = useState('')
    const [currentType, setCurrentType] = useState('ANIME')
    const [currentStatus, setCurrentStatus] = useState('')
  return (
    <aside className="border  rounded-md">
      <div className="px-3 py-5">
        <h2 className="text-2xl font-bold mb-1">Filters</h2>
        <p className="text-secondary-foreground text-[16px]">
          Use filters to find anime based on your interests
        </p>
        <div className="flex flex-col gap-y-6">
          <label>
            <h3 className="font-bold  mb-3  ">Genres</h3>
            <Select 
            placeholder='Select Genres...'
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              isMulti
              name="genres"
              options={CatalogGenreSelect}
            />
          </label>
          <label>
            <h3 className="font-bold  mb-3" >Year</h3>
            <div className="flex justify-between items-center">
              <input
                type="number"
                placeholder="2003"
                className="w-[40%]  py-1 px-2 rounded-sm border border-solid border-neutral-100 bg-transparent"
                maxLength={4}
              />
              <span className="font-bold  mb-3">-</span>
              <input
                type="number"
                placeholder="2024"
                className="w-[40%]  py-1 px-2 rounded-sm border border-solid border-neutral-100 bg-transparent"
                maxLength={4}
              />
            </div>
          </label>  
          <label> 
            <h3 className="font-bold  mb-3" >Format</h3> 
            <SidebarCheckBoxes currentValue={currentFormat} name={'format'} setValue={setCurrentFormat} checkboxes={CatalogFormats}/>
          </label>
          <label> 
            <h3 className="font-bold  mb-3" >Season</h3> 
            <SidebarCheckBoxes currentValue={currentSeason} name={'season'} setValue={setCurrentSeason} checkboxes={CatalogSeasons}/>
          </label>
          <label> 
            <h3 className="font-bold  mb-3" >Type</h3> 
            <SidebarCheckBoxes currentValue={currentType} name={'type'} setValue={setCurrentType} checkboxes={CatalogType}/>
          </label>
          <label> 
            <h3 className="font-bold  mb-3" >Status</h3> 
            <SidebarCheckBoxes currentValue={currentStatus} name={'status'} setValue={setCurrentStatus} checkboxes={CatalogStatus}/>
          </label>
          
        </div>
      </div>
    </aside>
  );
};

export default CatalogSidebar;
