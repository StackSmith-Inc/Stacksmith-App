import React from "react";
import { useSelector, useDispatch } from "react-redux";

declare const window: any;

const Analysis: React.FC = () => {
    

  return (
    <div className="flex flex-row justify-center content-center">
      <label htmlFor="my_modal_6" className="btn">open modal</label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col justify-center content-center">
          <h3 className="font-bold text-lg text-center">Analyzing your stack...</h3>
          <div className="flex flex-row justify-center content-center mt-10 mb-10">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
          <p className="text-center py-4 mt-10 mb-10">Analysis text</p>
          <div className="modal-action flex flex-row justify-center content-center">
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysis;