import React, { useEffect } from 'react'
import Home from './Home'
import {apiManager} from "../io/api"

const Pages = () => {
    useEffect(() => {
        
        
        (async()=>{
            const popular = await apiManager.getPopular()
            console.log(popular)
        })()
        
    
    }, [])
    
  return (
    <div>
        <Home/>
    </div>
  )
}

export default Pages