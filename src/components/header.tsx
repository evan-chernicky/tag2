import React from 'react'
import Image from 'next/image'
import logo from '../../assets/svgs/tag-logo.svg'


function header() {
  return (
    <div className="p-6 flex justify-center">
        <Image 
            className="object-cover object-center"
            src={logo}
            alt="TAG logo"
            priority={true}
        />
    </div>
  )
}

export default header