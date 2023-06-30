import React, {useEffect} from 'react'

function HorizontalAccordion() {

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

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                const accordionContent: HTMLElement | null = panel.querySelector('.accordiono-content')
                removeActiveClasses()
                panel.classList.add('active')
                console.log(panel.offsetWidth)
                panel.style.maxWidth = '100%'
                if (accordionContent) {
                    accordionContent.style.maxWidth = '100%'
                }
            })
        })
    },[])

  return (
    <div className="accordion-container">
        <div className="accordion-panel active">
            <h2 className="accordion-title">01 Design Service</h2>
            <div className="relative">
                <div className=" h-full absolute left-0 top-0">
                    test
                </div>
            </div>
        </div>
        <div className="accordion-panel">
            <h2 className="accordion-title">01 Design Service</h2>
            <div className="relative">
                <div className=" h-full absolute left-0 top-0">
                    test
                </div>
            </div>
        </div>
        <div className="accordion-panel">
            <h2 className="accordion-title">01 Design Service</h2>
            <div className="relative">
                <div className=" h-full absolute left-0 top-0">
                    test
                </div>
            </div>
        </div>
        <div className="accordion-panel">
            <h2 className="accordion-title">01 Design Service</h2>
            <div className="relative">
                <div className=" h-full absolute left-0 top-0">
                    test
                </div>
            </div>
        </div>
        <div className="accordion-panel">
            <h2 className="accordion-title">01 Design Service</h2>
            <div className="relative">
                <div className=" h-full absolute left-0 top-0">
                    test
                </div>
            </div>
        </div>
    </div>
  )
}

export default HorizontalAccordion