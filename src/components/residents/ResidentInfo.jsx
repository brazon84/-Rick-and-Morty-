import React from 'react'
import './resident.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResidentInfo = ({urlResident}) => {

    const [Resident, setResident]=useState(null)

const dataResident = async ()=>{
    try {
        const res = await axios.get(urlResident);

        setResident(res.data)
        
    } catch (error) {
        console.log(error);
        
    }
}

useEffect(()=>{
dataResident()
},[]);

  return (
    <div className='resident'>
{ Resident && (<article className='cards rounded-3 p-2'>
    <h3>{Resident.name}</h3>
    <div>
        <img className='rounded-4 border border-1' src={Resident.image} alt={Resident.name}/>
    </div>
    <ul>
        <li><h6>Status: </h6>{Resident.status}</li>
        <li><h6>Origin: </h6>{Resident.origin.name}</li>
        <li><h6>Episode: </h6>{Resident.episode.length}</li>
    </ul>
 </article>)}
    </div>
  );
};

export default ResidentInfo
