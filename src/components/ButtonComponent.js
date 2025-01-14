import React from 'react'

const ButtonComponent = ({ name }) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-md'>{name}</button>
    </div>
  )
}

export default ButtonComponent