/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import TechBox from "./techBox";

const Options = () => {
  const pickTechs = useSelector((state:RootState) => state.stackSources.pickTech)
  const [frontEnd, setFrontEnd] = useState<any[]>([]);
  const [backEnd, setBackEnd] = useState<any[]>([]);
  const [dataBase, setDataBase] = useState<any[]>([]);
  for (let i = 0; i < pickTechs.frontend.length; i++) {
    frontEnd.push(<TechBox techObj={pickTechs.frontend[i]} />)
  }
  for (let i = 0; i < pickTechs.backend.length; i++) {
    backEnd.push(<TechBox techObj={pickTechs.backend[i]} />)
  }
  for (let i = 0; i < pickTechs.database.length; i++) {
    dataBase.push(<TechBox techObj={pickTechs.database[i]} />)
  }
  // for (let i = 0; i < allTechs.length; i++) {
  //   if (allTechs[i].techtype === 'Frontend') {
  //     frontEnd.push(<TechBox techObj={allTechs[i]} />)
  //   } else if  (allTechs[i].techtype === 'Backend') {
  //     backEnd.push(<TechBox techObj={allTechs[i]} />)
  //   } else {
  //     dataBase.push(<TechBox techObj={allTechs[i]} />);
  
  //   }
  // }
  console.log(frontEnd)
  console.log(backEnd)
  console.log(dataBase)
  return(
    <>
      <div className="flex flex-col w-full border-opacity-50">
          <div className="flex flex-row justify-evenly p-3 card bg-base-300 rounded-box place-items-center">
            {frontEnd}
            {/* <span className="loading loading-dots loading-lg"></span> */}
          </div>
          <div className="divider"></div>
          <div className="flex flex-row justify-evenly card p-3 bg-base-300 rounded-box place-items-center">
            {backEnd}
            {/* <span className="loading loading-dots loading-lg"></span> */}
          </div>
          <div className="divider"></div>
          <div className="flex flex-row  justify-evenly card p-3 bg-base-300 rounded-box place-items-center">
            {dataBase}
            {/* <span className="loading loading-dots loading-lg"></span> */}
          </div>
        </div>
    </>
  )
}

export default Options