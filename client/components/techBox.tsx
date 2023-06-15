// import React from 'react'
// import { RootState } from '../redux/store';
// import { useSelector, useDispatch } from 'react-redux'


// interface techObj {
//     techname: string,
//     techtype: string,
//     techdescription: string,
//     img: string
//   }

// const techBox: React.FC = (props) => {
//   const dispatch = useDispatch();
//   const allTechs = useSelector((state: RootState) => state.stackSources.allTechs);


//   const textBox = allTechs.map((el: techObj): any => {
//     console.log(el);
//     return (
//     <div key={el.techname}>

//     <img onClick={() => dispatch(addTech(el))} className='btn' src={el.img}>
//     </img>

//     <div>
//         <p>{el.techname}</p>
//     </div>
//     </div>
//     )
    
//     });
    
//   return (
//     <>
//     {textBox}
//     </>
//   )
// }

// export default techBox;