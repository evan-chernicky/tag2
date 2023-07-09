import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import {testimonialSlides} from '../../data/TestimonialSliderData'
import PurpleCircle from '../../../assets/svgs/PurpleCircle'
import LeftArrow from '../../../assets/svgs/LeftArrow'

interface TestimonialSlide {
    logo: any;
    quote: string;
    quotee: string
}

function TestimonialSlider() {

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [currentSlideData, setCurrentSlideData] = useState<TestimonialSlide>({logo: null, quotee: '', quote: ''} )

    useEffect(() => {
        setCurrentSlideData(testimonialSlides[currentSlide])
    },[currentSlide])

    function handleSlideCount(isIndexUp: boolean) {
        const slideCount = testimonialSlides.length
        if (isIndexUp) {
            if (slideCount - 1 === currentSlide) return setCurrentSlide(0)
            return setCurrentSlide(currentSlide + 1)
        }
        if (currentSlide === 0) return setCurrentSlide(slideCount - 1)

        setCurrentSlide(currentSlide - 1)
    }

  return (
    <div className="relative bg-gray-gradient max-w-7xl mx-auto flex flex-col items-center justify-center text-white min-h-[432px]">
        <div className="mx-auto text-center max-w-4xl exo">
            <div>
                <div className="flex justify-center mb-8">
                    {currentSlideData?.logo ? <Image src={currentSlideData.logo} alt="army logo"/> : null}
                </div>
                <h3 className="text-2xl mb-6 leading-9">“{currentSlideData?.quote}&quot;</h3>
                <h4 className="text-lg tracking-tight">{currentSlideData?.quotee}</h4>
            </div>        
        </div>
        <div className="absolute bottom-10 flex gap-1.5">
            {testimonialSlides.map((slide, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)}>
                <PurpleCircle active={index === currentSlide}/>
            </button>
            ))}
        </div>
        <button onClick={() => handleSlideCount(false)} className="absolute -left-10 hover:-left-12 duration-300 top-0 bottom-0 m-auto max-h-min p-3 fill-white opacity-50 hover:opacity-100">
            <LeftArrow />
        </button>
        <button onClick={() => handleSlideCount(true)} className="absolute -right-10 hover:-right-12 duration-300 top-0 bottom-0 m-auto max-h-min p-3 fill-white opacity-50 hover:opacity-100 rotate-180">
            <LeftArrow />
        </button>
    </div>
  )
}

export default TestimonialSlider