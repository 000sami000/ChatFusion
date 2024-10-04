import React from "react";

function Search({ setsearchinput }) {
  return (
    <div className="flex gap-2 w-[100%]">
      <input
        type="text"
        placeholder="Search people"
        onChange={(e) => {
          setsearchinput(e.target.value);
        }}
        className=" input input-bordered  rounded-md focus:bg-none outline-none w-[100%]"
      />
    </div>
  );
}

export default Search;
