import React from 'react'
import Image from 'next/image'
import teamMeeting from '../../../assets/images/team-meeting.png'
import manTyping from '../../../assets/images/man-typing.png'
import womanTyping from '../../../assets/images/woman-typing.png'
import TagLogo from '../../../assets/svgs/TAG_logo2.svg'

function TeamGrid() {
  return (
    <>
    <div className="lg:flex justify-center text-center text-white align-center  grid-rows-[350px] overflow-hidden">
        <div className="lg:w-1/3 w-full  flex justify-center items-center bg-gray-gradient">
            <div className="px-4 py-9">
                <h3 className="text-5xl mb-2">Collaboration</h3>
                <p className="text-lg mb-5">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                <a className="skew-btn-purple tracking-widest uppercase text-xs	" href="#"><span>Work With Us</span></a>
            </div>
        </div>
        <div className="lg:w-1/3 w-full">
            <Image src={teamMeeting} alt="Members of team having a meeting" className="w-full object-cover object-top"/>
        </div>
        <div className="lg:w-1/3 w-full flex justify-center items-center bg-gray-gradient">
            <div className="px-4 py-9">
                <h3 className="text-5xl mb-2">Collaboration</h3>
                <p className="text-lg mb-5">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                <a className="skew-btn-purple tracking-widest uppercase text-xs	" href="#"><span>Work With Us</span></a>
            </div>
        </div>
    </div>
    <div className="lg:flex justify-center text-center text-white align-center grid-rows-[350px] overflow-hidden">
        <div className="lg:w-1/3 w-full">
            <Image src={manTyping} alt="Image of man typing" className="w-full h-full object-cover object-top"/>
        </div>
        <div className="lg:w-1/3 flex items-center justify-center w-full px-4 py-9 bg-gray-gradient">
            <Image src={TagLogo} alt="TAG logo"/>
        </div>
        <div className="lg:w-1/3 w-full">
            <Image src={womanTyping} alt="Image of women typing" className="w-full h-full object-cover object-top"/>
        </div>
    </div>
  </>
  )
}

export default TeamGrid