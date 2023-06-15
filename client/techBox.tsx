import React, { useEffect } from 'react'
import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { JsxElement } from 'typescript';

interface techObj {
    techname: string,
    techtype: string,
    techdescription: string,
    img: string
  }

const techBox = () => {
  const dispatch = useDispatch();
  const allTechs = useSelector((state: RootState) => state.stackSources.allTechs);

  

  const textBox = allTechs.map((el: techObj): any => {
    console.log(el);
    return (
    <div key={el.techname}>

    <img onClick={() => dispatch(addTech(el))} className='btn' src={el.img}>
    </img>

    <div>
        <p>{el.techname}</p>
    </div>
    </div>
    )
    
    });
    
  return (
    <>
    {textBox}
    </>
  )
}

export default techBox;