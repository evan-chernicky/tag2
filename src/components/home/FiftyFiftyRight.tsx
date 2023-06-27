import React from 'react'
import Image from 'next/image'
import Model from "../../../assets/images/Model.png"

function FiftyFiftyRight() {
  return (
    <div className="flex max-w-screen-xl mx-auto px-5 justify-between items-center">
      <div className="mr-28">
        <h2 className="text-xs font-bold uppercase mb-9 tracking-widest">SYSTEMS INTEGRATION</h2>
        <p className="text-2xl leading-9 mb-5">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam Quis Nostrud.</p>
        <a className="skew-btn-purple tracking-widest uppercase text-xs	" href="#"><span>Work With Us</span></a>
      </div>
      <Image src={Model} alt="Graph" />
    </div>
  )
}

export default FiftyFiftyRight