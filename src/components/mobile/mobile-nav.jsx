import { BiMenu } from "react-icons/bi"; 
/* eslint-disable react/prop-types */
import Logo from "../../components/logo";
import assets from "../../assets/assets";
const Mobilenav = ({setSideBar,setPage}) => {
  return (
    <div className="min-h-12 fixed top-0 grid grid-cols-12 items-center px-4 w-full bg-[#1C2020]" >
      <div className="col-span-4">
        <BiMenu className="font-bold text-2xl text-white" onClick={() => setSideBar(pre => !pre)} />
                
              </div>
              <div className="col-span-4">
                <Logo f="Uni" l="Nova" styles="text-color4 text-logo1" lstyles="text-color6" />
              </div>
              <div className="col-span-4 flex gap-3 items-center justify-end">
                <div> 
                  <img width={20} src={assets["notification-logo"]}/>
                </div>
                <div> 
                  <img width={20} src={assets["letter-logo"]}/>
                </div>
                <div onClick={() => setPage("change-password")} > 
                  <img width={20} src={assets["settings2-logo"]}/>
                </div>
              </div>
        </div>
  )
}

export default Mobilenav