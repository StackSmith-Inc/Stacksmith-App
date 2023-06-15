import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTech } from '../redux/stackSourcesSlice';
import Options from './Options';
import Picked from './Picked'
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
      console.log('data:',data.rows)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <>
      <Nav/>
      <div className="flex flex-col lg:flex-row m-6">
        <Options/>
        <div className="divider lg:divider-horizontal"></div> 
        <Picked/>
      </div>
      <Analysis/>
    </>
  )
}

export default App;