import React, { useState } from "react";
import {  HiSearch } from "react-icons/hi";


const Searchbar = () => {
  return (
    <div className="wrapper">
      <div className="flexCenter search-bar">
        <HiSearch color="var(--blue)" size={15} />
        <input width="100%" type="text" placeholder="Search for templates, projects, e.t.c" />
        
      </div>
    </div>
  );
};

export default Searchbar;