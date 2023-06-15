import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TechBox from "./techBox";

const Picked = () => {
  const chosenTechs = useSelector((state:RootState) => state.stackSources.chosenTechs)
  const [frontEnd, setFrontEnd] = useState<any[]>([]);
  const [backEnd, setBackEnd] = useState<any[]>([]);
  const [dataBase, setDataBase] = useState<any[]>([]);
  for (let i = 0; i < chosenTechs.frontend.length; i++) {
    frontEnd.push(<TechBox techObj={chosenTechs.frontend[i]} />)
  }
  for (let i = 0; i < chosenTechs.backend.length; i++) {
    backEnd.push(<TechBox techObj={chosenTechs.backend[i]} />)
  }
  for (let i = 0; i < chosenTechs.database.length; i++) {
    dataBase.push(<TechBox techObj={chosenTechs.database[i]} />)
  }
  // for (let i = 0; i < chosenTechs.length; i++) {
  //   if (chosenTechs[i].techtype === 'Frontend') {
  //     frontEnd.push(<TechBox techObj={chosenTechs[i]} />)
  //   } else if  (chosenTechs[i].techtype === 'Backend') {
  //     backEnd.push(<TechBox techObj={chosenTechs[i]} />)
  //   } else {
  //     dataBase.push(<TechBox techObj={allTechs[i]} />);
  
  //   }
  // }
  return(
    <>
      <div className="flex flex-col w-full border-opacity-50">
          <div className="flex flex-row justify-evenly p-3 card bg-base-300 rounded-box place-items-center">
            {/* <span className="loading loading-dots loading-lg"></span> */}
            {frontEnd}
          </div>
          <div className="divider"></div>
          <div className="flex flex-row justify-evenly p-3 card bg-base-300 rounded-box place-items-center">
            {/* <span className="loading loading-dots loading-lg"></span> */}
            {backEnd}
          </div>
          <div className="divider"></div>
          <div className="flex flex-row justify-evenly p-3 card bg-base-300 rounded-box place-items-center">
            {dataBase}
          </div>
        </div>
    </>
  )
}

export default Picked