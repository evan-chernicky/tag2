import React from 'react'
import Image from 'next/image'
import logo from '../../assets/images/tag-logo.png'

function header() {
  return (
    <div className="flex justify-center">
        <Image 
            className="object-cover object-center"
            src={logo}
            alt="TAG"
            priority={true}
        />
    </div>
  )
}

export default header