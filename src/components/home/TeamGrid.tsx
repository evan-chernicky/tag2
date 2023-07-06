import React from 'react'
import Image from 'next/image'
import teamMeeting from '../../../assets/images/team-meeting.png'


function TeamGrid() {
  return (
    <div className="grid grid-cols-3 justify-center text-center text-white align-center items-center grid-rows-[350px] overflow-hidden">
    <div className="px-4 py-9">
      <h3 className="text-5xl mb-2">Collaboration</h3>
      <p className="text-lg mb-5">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
      <a className="skew-btn-purple tracking-widest uppercase text-xs	" href="#"><span>Work With Us</span></a>
    </div>
    <div className="h-[350px]">
        <Image src={teamMeeting} alt="Members of team having a meeting" className="w-full h-full object-cover object-top"/>
    </div>
    <div>
      <h3 className="text-5xl mb-2">Collaboration</h3>
      <p className="text-lg mb-5">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
      <a className="skew-btn-purple tracking-widest uppercase text-xs	" href="#"><span>Work With Us</span></a>
    </div>
    <div>
    </div>
    <div>hi</div>
    <div>hi</div>
  </div>
  )
}

export default TeamGrid