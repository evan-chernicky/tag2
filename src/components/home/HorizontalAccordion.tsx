import React, {useEffect, useState} from 'react'
import AccordionPanel from './Cards/AccordionPanel'
import {accordionSlides} from '../../data/HorizontalAccordionData'


function HorizontalAccordion() {

    const [activeSlide, setActiveSlide] = useState<number>(0)

    useEffect(() => {
        const panels: Array<HTMLElement> = Array.from(document.querySelectorAll('.accordion-panel'))

        const removeActiveClasses = () => {
            panels.forEach(panel => {
                const accordionContent: HTMLElement | null = panel.querySelector('.accordiono-content')
                panel.classList.remove('active')
                panel.style.maxWidth = '77px'
                if (accordionContent) {
                    accordionContent.style.maxWidth = '0px'
                }
            })
        }

        panels.forEach((panel, index) => {
            panel.addEventListener('click', () => {
                const accordionContent: HTMLElement | null = panel.querySelector('.accordiono-content')
                removeActiveClasses()
                panel.classList.add('active')
                panel.style.maxWidth = '100%'
                if (accordionContent) {
                    accordionContent.style.maxWidth = '100%'
                }
                setActiveSlide(index)
            })
        })
    },[])


  return (
    <div className="accordion-container">
        {accordionSlides.map((slide, index) => <AccordionPanel key={index} isActive={index === activeSlide} />)}
    </div>
  )
}

export default HorizontalAccordion