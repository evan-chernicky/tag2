import React, {useEffect} from 'react'

function JoinOurTeam() {

    useEffect(() => {

        function Marquee(selector: string, speed: number) {
            const parentSelector: HTMLElement | null = document.querySelector(selector);
            const clone: string | undefined = parentSelector?.innerHTML;
            const firstElement: HTMLElement | null = parentSelector?.children[0] as HTMLElement;
            let i = 0;
            if (parentSelector && clone && firstElement) {
            parentSelector?.insertAdjacentHTML('beforeend', clone);
            parentSelector?.insertAdjacentHTML('beforeend', clone);
            parentSelector?.insertAdjacentHTML('beforeend', clone);
            parentSelector?.insertAdjacentHTML('beforeend', clone);
          
            setInterval(function () {
            firstElement.style.marginLeft = `-${i}px`;
              if (i > firstElement.clientWidth) {
                i = 0;
              }
              i = i + speed;
            }, 0);
        }
          }

          const timeout = setTimeout(() => {
            Marquee('.marquee', 0.35);
          }, 0);
        
          return () => clearTimeout(timeout);
        

        },[])


          

  return (
    <div className="marquee">
        <h2>Join Our Team</h2>
    </div>
  )
}

export default JoinOurTeam