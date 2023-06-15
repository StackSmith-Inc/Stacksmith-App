import React from 'react'
import { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'

// interface techBoxProps {
//   techObj: techObj,
//   handleClick: (e: any) => void
// }

// interface techObj {
//     techname: string,
//     techtype: string,
//     techdescription: string,
//     img: string
//   }

const TechBox = (props: any):any => {
  console.log('props',props)
  const dispatch = useDispatch(); 
  
 
  
  return (
    <>
      <div className="tooltip" data-tip={props.techObj.techdescription}  >
        <p> {props.techObj.techname}</p>
        <img onClick={(e) => dispatch(props.handleClick(e))} className='btn' src={props.techObj.img}/>
      </div>
    </>
  )
}

export default TechBox;