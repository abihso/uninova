import assets from "../assets/assets"
const Card1 = () => {
  return (
      <div className="h-56 p-2 background-color10 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863] w-44" >
                <div className="w-4/5 min-h-12 background-color11 text-white py-1 px-2 text-sm rounded-[5px]" >
                  C++ Programming
                </div>
                  <p className="text-sm font-bold mt-1" >Attendance</p>
                  <div className="flex justify-center mt-2 -ml-2 items-center" >
                    <img src={assets["piechart-logo"]} />
                  </div>
                  <p className="text-xs mt-2 text-[#9A999B] font-bold" >Last 24 Hours</p>
        </div>
  )
}

export default Card1