import headerLogo from "../assets/images/header-logo.png"
import {hamburger} from "../assets/icons"
import {close} from "../assets/icons"
import {navLinks} from "../constants"
import { useEffect, useState } from "react"
import { UseContext } from "../context/ContextProvider"


const Nav = () => {

  const [blur,setBlur]=useState(false)
  const {active,setActive}=UseContext()


 useEffect(()=>
 {
  window.addEventListener("scroll",()=>
  {
    if(window.scrollY>20)
    {
       setBlur(true)
    }
    else
    {
      setBlur(false)
    }
  })

  return () => window.removeEventListener("scroll",()=>
  {
    return
  });

   
 },[blur])


  return (
    <header className={`padding-x py-5 fixed ${blur &&'backdrop-blur-2xl'} z-20 w-full`}>
         <div  className='flex justify-between items-center'>
              <a href="/" className="mr-5">
                 <img className='h-[50px] w-[220px]' src={headerLogo}  alt="logo" />
              </a>
              <ul  className='flex flex-1 justify-center  items-center gap-16 max-lg:hidden'>
                  {navLinks.map((item)=>(

                      <li key={item.label}>
                          <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                             {item.label}
                          </a>
                      </li>

                  ))
                   }
                   <div className='text-white focus:ring cursor-pointer text-lg font-montserrat bg-origin hover:bg-[#3f53f1] px-5 py-2 rounded-md'>Signin</div>
              </ul>
              <div onClick={()=>setActive((prev)=>!prev)} className='hidden max-lg:block cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'>
                       <img src={active?close:hamburger} width={25} height={25} alt="menu" />
              </div>
         </div>
    </header>
  )
}

export default Nav
