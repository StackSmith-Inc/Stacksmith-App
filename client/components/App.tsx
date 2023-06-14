import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { load } from '../redux/stackOptionsSlice';
import Options from './Options';
import Nav from './Nav';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(load());
  }, [])

  return (
    <>
      <Nav/>
      <Options/>
    </>
  )
}

export default App;