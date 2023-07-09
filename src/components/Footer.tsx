import React from 'react'
import Image from 'next/image'
import TagLogo from '../../assets/svgs/TAG_logo2.svg'
import Tag from '../../assets/svgs/form-arrow.svg'

function Footer() {
  return (
    <footer className="-mt-80 bg-footer bg-cover bg-center text-white">
      <div className="pt-80">
        <div className="min-h-[395px] py-24 max-w-7xl mx-auto flex">
            <div className="grid grid-cols-3 gap-x-11 w-9/12">
                <div className="flex flex-col gap-6">
                  <div>
                    <Image src={TagLogo} alt="Tag Logo" />
                    <p className="uppercase ml-11 mt-3 space">EXACTNESS IN ACTION</p>
                  </div>
                  <p className="text-xs font-exo">©2023 TAG - Technology Advancement Group<br/>All Rights Reserved.</p>
                </div>
                <div>
                  <h4 className="uppercase tracking-widest font-exo font-bold mb-4">Contact Info</h4>
                  <p className="font-exo text-lg tracking-tight">703-406-3000<br/>21580 Beaumeade Circle, Suite 210<br/>Ashburn, Va 20147</p>
                </div>
                <div>
                  <h4 className="uppercase tracking-widest font-exo font-bold mb-4">Social</h4>
                  <a className="font-exo text-lg tracking-tight underline hover:text-black duration-300" href="#" target="_blank">Linkedin</a>
                </div>
            </div>
            <div className="w-3/12">
                <h4 className="uppercase tracking-widest font-exo font-bold mb-4">Newsletter</h4>
                <p className="font-exo text-lg tracking-tight mb-8">Stay Up To Date With The Latest</p>
                <form className="relative w-3/4">
                  <input className="bg-transparent border-white border-b py-2 placeholder:text-white w-full outline-none placeholder:opacity-70 placeholder:focus:opacity-100 placeholder:duration-300 text-white/70 focus:text-white duration-300" placeholder="Your E-Mail" type="email"></input>
                  <button onClick={(e) => e.preventDefault()} className="absolute right-1 top-0 bottom-0 my-auto duration-500 hover:-translate-x-1 will-change-transform" type="submit">
                    <Image src={Tag} alt="Button submit arrow"/>
                  </button>
                </form>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer