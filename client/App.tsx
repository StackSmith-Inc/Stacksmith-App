import React, { useEffect } from 'react'
import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { fetchTech } from './redux/stackSourcesSlice'
import { Root } from 'postcss';

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

    
    // const techBox = techData.map((el) => {
    //   <div >
    //     el
    //   </div>
    // })
  },[]);

  return (
    <>
      
    </>
  )
}

export default App;