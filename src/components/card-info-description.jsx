/* eslint-disable react/prop-types */
import assets from "../assets/assets"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; 

const Cardinfodescription = ({color1,color2,data}) => {
 
  return (
    <>
      {
        data.map((item, index) => (
          <div key={index} className={`flex items-center gap-3 mb-3 bg-[${color1}] h-12 overflow-hidden pb-3 pt-3 pr-4  px-2`} >
      <div className=" h-8 w-20" >
        <img src={assets["profile1-logo"]} className="h-full" alt="" />
      </div>
      <div className="w-full" >
        <p className="font-bold text-sm">{ item.description}</p>
        <p className="text-[10px]">{ item.infor}</p>
      </div >
      <div className={`w-8 h-6 rounded-[6px] bg-[${color2}] flex items-center justify-center `} >
        <MdOutlineKeyboardArrowRight className="text-xl" />
      </div>
    </div>
        ))
      }
    </>
  )
}

export default Cardinfodescription