import {Hero,CustomerReviews,Footer,Services,PopularProducts,SpecialOffer,Subscribe,SuperQuality} from "./sections"
import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import { UseContext } from "./context/ContextProvider"
import { AnimatePresence } from "framer-motion";


function App() {
    const {active,setActive,size}=UseContext()

    {
        if(size>1024)
        {
            setActive(false)
        }
    }


  return (
    <main className='relative'>
      <Nav/>
      <AnimatePresence >
          {active&&<Sidebar/>}
      </AnimatePresence>
     
      <section className='xl:padding-1 wide:padding-r padding-b '>
          <Hero/>
      </section>
      <section className='padding-x'>
          <PopularProducts/>
      </section>
      <section className='padding'>
          <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
          <Services/>
      </section>
      <section className='padding'>
          <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding '>
          <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe/>
      </section>
      <section className='padding-x bg-black padding-t pb-8'>
          <Footer/>
      </section>
     
    </main>
  )
}

export default App
