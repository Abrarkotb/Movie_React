import React from 'react'

const CharacterGrid = ({items , ISLoading}) => {
  return ISLoading ? (<h1>LOADING...</h1>) :(<section className='cards'>
{items.map(item =>(
   <h1>{item.name}</h1>
)
)}
  </section>)
}

export default CharacterGrid
