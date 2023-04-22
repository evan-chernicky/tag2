import Image from 'next/image'
import surfaceBottom from '../../assets/images/surface-bottom.png'
import northStar from '../../assets/images/north-star(overlay).png'

export default function Home() {
  return (
    <main className={`min-h-screen`}>
      <div className=" w-full h-full fixed bg-[url('../../assets/images/bg-sky.png')] bg-cover">
        <div className="flex justify-center items-center h-full z-20 relative">
          <h1 className="font-heading text-white text-6xl uppercase mb-32 text-center">It&apos;s an Exact Science</h1>
        </div>
        <div className="absolute z-10 top-24 right-1/4">
          <Image 
            className="object-cover object-center"
            src={northStar}
            alt="North Star"
            priority={true}
          />
        </div>   
        <div className="absolute bottom-0 z-0">
          <Image 
            className="max-h-[650px] min-h-[500px] object-cover object-center"
            src={surfaceBottom}
            alt="Background of beach"
            priority={true}
          />
        </div>
      </div>
    </main>
  )
}
