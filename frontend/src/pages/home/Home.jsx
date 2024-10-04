import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messagecontainer/MessageContainer";

function Home() {

  return (
    <>
      <div className=" w-full flex justify-center my-[1%] rounded-md">
        <div className="bg-[#4c4c4c] opacity-[50%] p-2 rounded-[100%] flex justify-center items-center">
          <img src="./logo.png" width={"55px"} className="filter invert " />
        </div>
      </div>
      <div className="w-[93%] bg-slate-600 rounded-md h-[83vh]  m-auto flex">
        <Sidebar/>
        <MessageContainer/>
      </div>
    </>
  );
}

export default Home;
