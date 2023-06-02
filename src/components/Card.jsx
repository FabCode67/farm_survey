import React from 'react'
import HARV from '../assets/HARV.jpg'
import {Link} from 'react-router-dom'


const Card = () => {
  return (
    
          <Link
            to={`/dashboard/product/`}
            className="bg-slate-200 p-4"
          >
            <img
              src={HARV}
              alt={HARV}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-xl font-bold mt-2">
why do you think like bad man?  
     
      </h3>

            <p className="mt-1">
            why do you think like bad man?  
why do you think like bad man? 
why do you think like bad man?  
why do you think like bad man? 
why do you think like bad man?  
why do you think like bad man? 
            </p>
          </Link>
  )
}

export default Card