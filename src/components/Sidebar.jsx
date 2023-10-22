import { navLinks } from "../constants";
import { UseContext } from "../context/ContextProvider"
import { motion,AnimatePresence } from "framer-motion";


const Sidebar = () => {
  const {active,setActive}=UseContext()

  return (

    <div  className="flex justify-center">
          <motion.div key={"bar"} initial={{y:-400,opacity:0}} animate={{y:90,opacity:1}} exit={{y:-400,opacity:0}}  className={`w-screen h-screen  fixed backdrop-blur-md z-30`}>
              <ul  className='flex flex-col  items-center justify-center gap-5 mt-10'>
                          {navLinks.map((item)=>(

                              <li onClick={()=>setActive(false)} key={item.label}>
                                  <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                                    {item.label}
                                  </a>
                              </li>

                          ))
                          }
                          <div className='text-white focus:ring cursor-pointer text-lg font-montserrat bg-origin hover:bg-[#3f53f1] px-5 py-2 rounded-md'>Signin</div>
              </ul>
          </motion.div>
   
    </div>
   
  )
}

export default Sidebar
