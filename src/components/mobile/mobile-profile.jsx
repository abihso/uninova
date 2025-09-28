import assets from "../../assets/assets"
const Mobileprofile = () => {
  return (
    <div className="h-40 bg-[#1C2020] px-4 py-4 rounded-xl flex mt-4" >
        <div className="w-40 h-full border-r-2 flex items-center flex-col " >
          <img src={assets["profile1-logo"]} className="h-20 bg-cover"  alt="" />
           <p className="text-[10px] text-[#8F8F8F] font-bold mt-2">Hey, AbihSolo</p>
           <p className="text-[10px] text-[#8F8F8F] font-bold ">Bsc IT</p>
           <p className="text-[10px] text-[#8F8F8F] font-bold ">Jan-03-22</p>
        </div>
        <div className="px-4 text-[#FED4FF] text-xl font-bold" >
          <p>Good Morning,</p>
          <p> Mr AbihSolo</p>
        </div>
    </div>
  )
}

export default Mobileprofile