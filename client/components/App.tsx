import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTech } from '../redux/stackSourcesSlice';
import Options from './Options';
import Nav from './Nav';
import Analysis from './Analysis';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch ('/api/frontend', {
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('request failed')
      }
      return response.json()
    })
    .then(data => {
      dispatch(fetchTech(data.rows));
      console.log(data.rows)
    })
    .catch(error => {
      console.error(error)
    })
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