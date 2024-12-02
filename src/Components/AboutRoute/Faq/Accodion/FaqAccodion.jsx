
import { Plus, Minus } from "lucide-react"
import { Collapse } from "react-collapse"
const FaqAccodion = ({title , desc , open, toggle}) => {
    
  return (
    // shadow-blue-800 rounded-md
    <>
        <div className="my-5 bg-[#FFFFFF] shadow-lg accodion rounded-md rounded-t-md "> 
            <button onClick={toggle} className={`flex  focus:outline-none focus:ring focus:ring-[#FF8C05] w-full justify-between items-center px-3 rounded-md ${open? 'shadow-blue-800 rounded-md focus:ring-0 transition' :''}`}>
                <span className={`py-5 font-[poppins] font-bold text-start ${open ? ' text-[#FF8C05]' : ''}`}>{title}</span> 
                <div className={`${open ? ' text-[#FF8C05]' : ''}`}>
                    {
                        open ?  <Minus /> : <Plus /> 
                    }
                </div>
            </button>
            <Collapse isOpened={open} className={`transition-all duration-300 ease-in-out text-slate-600 text-sm ${open? 'transition ease-in-out duration-300':''} `} >
                <div>
                    <div className=" overflow-hidden px-2 transition ">
                        <p className=" text-[14px] text-[#6c6f70] py-3 leading-[25px] font-[poppins] px-3">{desc}</p>
                    </div>
                </div>
            </Collapse>
        </div>
    </>
  )
}

export default FaqAccodion