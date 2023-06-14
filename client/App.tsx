import React, { useEffect } from 'react'
import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { load, increment } from './redux/stackSourcesSlice';
import { fetchTech } from './redux/stackSourcesSlice'
import { Root } from 'postcss';

const App = () => {
  const dispatch = useDispatch();
  const frontend = useSelector((state: RootState) => state.stackSources.frontend);
  const value = useSelector((state: RootState) => state.stackSources.value);
  
  useEffect(() => {
    const techData = dispatch(fetchTech());
    console.log(techData)
    const techBox = techData.map((el) => {
      <div >
        el
      </div>
    })
  }, [])

  return (
    <>
      <div className="text-xl text-red-500">Hello</div>
      <p>Frontend: {frontend.toString()}</p>
      <p>Value: {value}</p>
      <button className="bg-slate-500 m-4" onClick={() => dispatch(load())}>Update Frontend</button>
      <button className="bg-slate-500 m-4" onClick={() => dispatch(increment())}>Increment Value</button>
    </>
  )
}

export default App;