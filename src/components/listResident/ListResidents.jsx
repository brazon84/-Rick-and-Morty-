import React from 'react'
import ResidentInfo from '../residents/ResidentInfo'

const ListResidents = ({residents}) => {
  return (
    <div>
      <section className='d-flex gap-5 justify-content-center align-items-center flex-wrap'>
     
          {residents.map((resident) => (
            <ResidentInfo key={resident} urlResident={resident} />
          ))}
      </section>
    </div>
  )
}

export default ListResidents
