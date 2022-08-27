import React from 'react'
import './CatCard.css'
const CatCard = ({data}) => {
  return (
    <div className='card'>
        <div>
        {data}
        </div>
    </div>
  )
}

export default CatCard
