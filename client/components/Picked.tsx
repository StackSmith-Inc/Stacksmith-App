import React from "react";

const Picked = () => {

  return(
    <>
      <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
          <div className="divider"></div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
          <div className="divider"></div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
          <div className="divider"></div>
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </div>
    </>
  )
}

export default Picked