import React from 'react'

interface props {
    active: boolean
}

function PurpleCircle({active}: props) {

    const isFilled = active ? '#683d8c' : 'transparent'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
    >
      <g fill="none" stroke='#683d8c' strokeWidth="1" data-name="Ellipse 2">
        <circle cx="6.5" cy="6.5" r="6.5" stroke="none"></circle>
        <circle cx="6.5" cy="6.5" r="6" fill={isFilled}></circle>
      </g>
    </svg>
  )
}

export default PurpleCircle