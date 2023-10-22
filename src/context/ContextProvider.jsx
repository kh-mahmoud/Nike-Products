import { useContext,createContext,useState, useEffect } from "react";



const StateContext=createContext()



export const ContextProvider=({children})=>
{
    const [active,setActive]=useState(false)
    const [size,setSize]=useState(false)

    useEffect(() => {
        const handleResize = () => {
          setSize(window.innerWidth);
        };
      
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      

    return(
        <StateContext.Provider value={{active,setActive,size}}>
            {children}
        </StateContext.Provider>
    )
   
}

export const UseContext=()=>useContext(StateContext)
