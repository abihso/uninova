import { BiLogOut } from "react-icons/bi"; 
import { BiLoaderCircle } from "react-icons/bi"; 
import { IoMdSettings } from "react-icons/io"; 
import { FaUserCog } from "react-icons/fa"; 
/* eslint-disable react/prop-types */
import { MdKeyboardArrowDown } from "react-icons/md"; 
import assets from "../assets/assets"
import Logo from "./logo"
import Searchbar from "./search-bar"
const Navbar2 = ({items,setPage,setProfileModal,profileModal,setActivePage,activePage}) => {
  
  return (
    <nav className="flex  min-h-14 background-color4" >
        <div className="flex items-center gap-20 w-[750px] pl-14" >
          <Logo f="Uni" l="Nova" styles="text-color4 text-logo1" lstyles="text-color6" />
          <Searchbar />
        </div>
        <div className="flex gap-1 justify-end w-full" >
          {
          items.map((tap, index) => (<div onClick={() => { setPage(tap.to); setActivePage(tap.to)}} className={activePage == tap.to ? `flex cursor-pointer border-t-[5px] rounded-b-lg border-[#FFE1FF] bg-[#424C58] gap-2 px-4 items-center text-white font-bold text-xs` : `flex cursor-pointer hover:border-t-[5px] transition-all hover:rounded-b-lg border-[#FFE1FF] hover:bg-[#424C58] gap-2 px-4 items-center text-white font-bold text-xs`} key={index}>
              <div className="" >
                <img src={tap.logo}  alt="" />
              </div>
            {
              tap.name
            }
            </div>))
        }
        <div className="flex ml-5 mr-5 items-center w-28 justify-center">
          <div onMouseEnter={() => setProfileModal("show")} onMouseLeave={() => setProfileModal("")} className="flex rounded-md cursor-pointer items-center justify-center gap-1 background-color9 w-full text-gray-300" >
            <img src={assets["profile1-logo"]} alt="" />
            profile
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      {
        profileModal == "show" && (
          <div onMouseEnter={() => setProfileModal("show")} onMouseLeave={() => setProfileModal("")} className="fixed w-44 h-50 rounded-[10px] border px-5 py-6 border-gray-600 bg-[#1C2020] right-0 top-10 mr-5" >
        
           <div className="flex gap-5 py-3 pl-1 hover:bg-[#424C58] cursor-pointer items-center border-b border-[#6C6D6D] pb-2" >
          <FaUserCog className="text-[#F68D88] text-xl" />
          <p className="text-[#6C6D6D] font-bold text-sm" >
            User Profile
          </p>
        </div>
        <div className="flex gap-5 py-3 pl-1 hover:bg-[#424C58] cursor-pointer items-center border-b mt-3 border-[#6C6D6D] pb-2" >
          <IoMdSettings className="text-[#F68D88] text-xl" />
          <p className="text-[#6C6D6D] font-bold text-sm" >
            Settings
          </p>
        </div>
        <div className="flex gap-5 py-3 pl-1 hover:bg-[#424C58] cursor-pointer items-center border-b mt-3 border-[#6C6D6D] pb-2" >
          <BiLoaderCircle className="text-[#F68D88] text-xl" />
          <p className="text-[#6C6D6D] font-bold text-sm" >
            Projects
          </p>
        </div>
        <div className="flex gap-5 py-3 pl-1 hover:bg-[#424C58] cursor-pointer items-center border-b mt-3 border-[#6C6D6D] pb-2" >
          <BiLogOut className="text-[#F68D88] text-xl" />
          <p className="text-[#6C6D6D] font-bold text-sm" >
            Logout
          </p>
        </div>
        
      </div>
        )
      }
      </nav>
  )
}

export default Navbar2