import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { load } from '../redux/stackSourcesSlice';
import Options from './Options';
import Nav from './Nav';
import Analysis from './Analysis';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(load());
  }, [])

  return (
    <>
      <Nav/>
      <Options/>
      <Analysis/>
    </>
  )
}

export default App;