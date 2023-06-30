import React from 'react'
import Image from 'next/image'
import SlidePicture from '../../../../assets/images/slide-picture.png'

interface props {
    index: number,
    slide: any
}

function AccordionPanel({index, slide}: props) {

const isActive = (index === 0) ? 'active' : ''

  return (
        <div className={`accordion-panel ${isActive}`}>
        <h2 className="accordion-title">01 Design Service</h2>
        <div className="h-full relative">
            <div className="flex items-center accordion-content h-full absolute left-0 top-0">
                <div className="mr-12 w-[43%]">
                    <h3 className="text-3xl	mb-5 leading-9">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</h3>
                    <p className="mb-5">Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit Aspernatur Aut Odit Aut Fugit, Sed Quia. Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
                    <a className="skew-btn-purple tracking-widest uppercase text-xs	" href="#"><span>Work With Us</span></a>
                </div>
                <div className="w-[57%] mr-auto h-full flex">
                    <Image
                        src={SlidePicture}
                        alt="Phone and laptop"
                        loading="lazy"
                        className="max-h-full m-auto mr-0 object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccordionPanel