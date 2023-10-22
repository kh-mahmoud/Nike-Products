import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"



const Footer = () => {
  return (
    <footer>
        <div className="flex justify-between flex-wrap  ">
          <div className="flex flex-col mb-6 ">
            <a href="/">
                <img src={footerLogo} alt="logo" width={150} height={46} />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards.
            </p>
            <div className="flex items-start gap-4 mt-6 cursor-pointer">
                {socialMedia.map((media,index)=>
                (
                  <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center" key={index}>
                       <img width={24} height={24} src={media.src} alt={media.alt} />

                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-between max-lg:gap-10  gap-20  flex-grow flex-wrap">
            {footerLinks.map((links,index)=>(
              <div key={index}>
                 <h4 className="text-white text-2xl mb-6">
                 {links.title}
                </h4>
                {links.links.map((link,index)=>(
                   <ul className="text-white" key={index}>
                       <li className="mt-3 hover:text-slate-gray font-montserrat"><a href={link.link}>{link.name}</a> </li>
                   </ul>
                ))}
            
              </div>
            
            ))}

          </div>
          <div className='flex justify-between w-full text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
              <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                <img
                  src={copyrightSign}
                  alt='copyright sign'
                  width={20}
                  height={20}
                  className='rounded-full m-0'
                />
                <p>Copyright. All rights reserved.</p>
              </div>
        <p className='hover:text-slate-gray font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>

        </div>
    </footer>
  )
}

export default Footer
