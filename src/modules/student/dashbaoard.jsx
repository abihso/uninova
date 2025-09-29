import { BiLogOut } from "react-icons/bi"; 
import { MdOutlineAccountBalance } from "react-icons/md"; 
import { BiCoinStack } from "react-icons/bi"; 
import { AiOutlineFileAdd } from "react-icons/ai"; 
import { GiArchiveRegister } from "react-icons/gi"; 
import { MdDashboard } from "react-icons/md"; 
import { IoMdClose } from "react-icons/io"; 
import { BsBoxArrowLeft } from "react-icons/bs"; 
import { useState } from "react";
import { CgMenu } from "react-icons/cg"; 
import { RiDashboardFill } from "react-icons/ri"; 
import assets from "../../assets/assets"
import Navbar2 from "../../components/nav-bar2"
import 'react-calendar/dist/Calendar.css';
import Dashboardpage from "../pages/dashboard-page";
import CoruseRegistrationPage from "../pages/coruse-registration-page";
import Examination from "../pages/examination-timetable";
import Accounts from "../pages/accounts";
import Results from "../pages/results";
import ChangePasswordPage from "../pages/change-password";
import Mobilenav from "../../components/mobile/mobile-nav";
;
import Logo from "../../components/logo";
import MobileDashboard from "../../components/mobile/modile-dashboard";
const Dashbaoard = () => {
  const [value, onChange] = useState(new Date());
  const [profileModal, setProfileModal] = useState("")
  const [activePage,setActivePage] = useState(false)
  const [page, setPage] = useState("dashboard")
  const [sideBar,setSideBar] = useState(false)
  const renderPage = () => {
    if (page == "register") {
      return <CoruseRegistrationPage />
    } else if (page == "examination") {
     return <Examination />
    }else if (page == "accounts") {
     return <Accounts />
    } else if (page == "results") {
     return <Results />
    } else if (page == "change-password") {
     return <ChangePasswordPage />
    } else {
       return  <Dashboardpage
                  valueCalendar={value}
                  onChangeCalendar={onChange}
                  assignmentData={assignmentData}
                  messagesData={messagesData}
                  dailyScheduleData={dailyScheduleData}
                />
    }
  }
  const renderMobilePage = () => {
     if (page == "register") {
      return <CoruseRegistrationPage />
    } else if (page == "examination") {
     return <Examination setPage={setPage}  />
    }else if (page == "accounts") {
     return <Accounts />
    } else if (page == "results") {
     return <Results />
    } else if (page == "change-password") {
     return <ChangePasswordPage  setSideBar={setSideBar} />
    } else {
       return   <MobileDashboard dailyScheduleData={dailyScheduleData} />
    }
  }
  const assignmentData = [
    {
      description: "Mr. Godfred Kusi[mentor]",
      infor:"Programming with C++/Data Structures and Algorithm"
    },
    {
      description: "Mr. Godfred Kusi[mentor]",
      infor:"Programming with C++/Data Structures and Algorithm"
    },
  ]
  const dailyScheduleData = [
    {
      description: "Mr. Godfred Kusi[mentor]",
      infor:"Programming with C++/Data Structures and Algorithm"
    },
    {
      description: "Mr. Godfred Kusi[mentor]",
      infor:"Programming with C++/Data Structures and Algorithm"
    },
  ]
  const messagesData = [
    {
      description: "Mr. Godfred Kusi[mentor]",
      infor:"Programming with C++/Data Structures and Algorithm"
    },
    {
      description: "Mr. Godfred Kusi[mentor]",
      infor:"Programming with C++/Data Structures and Algorithm"
    },
  ]

  const sideBarTaps = [
    {
      name: "Accounts",
      icon: assets["accounts-logo"],
      page: "accounts",
      active: setActivePage,
      icon2 : <MdOutlineAccountBalance className="text-2xl text-[#DD6B6B]"/>
    },
    {
      name: "Schedules",
      icon: assets["schedules-logo"],
      active: setActivePage,
      icon2: <BiCoinStack className="text-2xl text-[#DD6B6B]" />
    },
    {
      name: "Results",
      icon: assets["schedules-logo"],
      page:"results",
      active: setActivePage,
      icon2: <AiOutlineFileAdd className="text-2xl text-[#DD6B6B]" />
    },
    {
      name: "Register",
      icon: assets["schedules-logo"],
      page:"register",
      active: setActivePage,
      icon2 : <GiArchiveRegister className="text-2xl text-[#DD6B6B]" />
    },
  ]
  const mobileSideBarTaps = [
    {
      name: "Accounts",
      icon: assets["accounts-logo"],
      page: "accounts",
      active: setActivePage,
      icon2 : <MdOutlineAccountBalance className="text-2xl text-[#DD6B6B]"/>
    },
    {
      name: "Schedules",
      icon: assets["schedules-logo"],
      active: setActivePage,
      icon2: <BiCoinStack className="text-2xl text-[#DD6B6B]" />
    },
    {
      name: "Results",
      icon: assets["schedules-logo"],
      page:"results",
      active: setActivePage,
      icon2: <AiOutlineFileAdd className="text-2xl text-[#DD6B6B]" />
    },
    {
      name: "Register",
      icon: assets["schedules-logo"],
      page:"register",
      active: setActivePage,
      icon2 : <GiArchiveRegister className="text-2xl text-[#DD6B6B]" />
    },
    {
      name: "Examination",
      icon: assets["schedules-logo"],
      page:"examination",
      active: setActivePage,
      icon2 : <GiArchiveRegister className="text-2xl text-[#DD6B6B]" />
    },
  ]
  const sideBarTaps2 = [
    {
      name: "Resources",
      icon: assets["accounts-logo"],
      active:setActivePage
    },
    {
      name: "Events",
      icon: assets["schedules-logo"],
      active:setActivePage
    },
    {
      name: "Communities",
      icon: assets["schedules-logo"],
      active:setActivePage
    },
  ]
  const items = [
    {
      name: "Home",
      to: "home",
      logo:assets["home-logo"],
      active:setActivePage
    },
    {
      name: "Time Table",
      to: "timestable",
      logo:assets["timestable-logo"],
      active:setActivePage
    },
    {
      name: "Examination",
      to: "examination",
      logo:assets["exams-logo"],
      active:setActivePage
    },
    {
      name: "Change Password",
      to: "change-password",
      logo:assets["password-logo"],
      active:setActivePage
    }
  ]
  return (
    <>
      <div className="md:hidden bg-[#F8DBFD] flex-1" >
        {sideBar &&
          <div className="fixed flex flex-col flex-1 top-0 left-0 bottom-0 w-3/4 z-10 bg-[#F8DBFD] shadow-[0_0_30px_rgba(0,0,0,1)] border-[#16181863]  " >
            <div className="h-12 flex px-4 items-center w-full bg-[#1C2020]" >
            <div className="w-full flex justify-center">
              <Logo f="Uni" l="Nova" styles="text-color4 text-logo1" lstyles="text-color6"/>
            </div>
            <div className="">
              <IoMdClose className="text-white text-2xl" onClick={() => setSideBar(pre => !pre)} />
            </div>
            </div>
             <div className="h-full w-full px-3" >
              <div className="h-24 rounded-[10px] flex items-center mt-3 w-full bg-[#1C2020] text-[#CECBCB]" >
                <img src={assets["profile1-logo"]} className="w-24" />
                <div>
                  <p className="font-bold" >Mr AbihSolo</p>
                  <p className="text-[10px]" >Jan 25 <sup>th</sup> 2024</p>
                  <p className="text-[10px]" >Bsc Computer Science</p>
                </div>
              </div>
              <div className="border-l-4 mt-7 mb-5 border-[#1C2020] h-14" >
                <div onClick={() => { setPage(""); setSideBar(false)}} className="flex gap-3 items-center border-2 border-[#FFCFD3] h-full pl-5 w-4/5 rounded-[10px] ml-[2px] bg-[#E9CEEE]" >
                  <MdDashboard className="text-2xl text-[#A630A4]" />
                  <p className="font-extrabold text-xl text-[#415760]" >
                    Dashboard
                  </p>
                </div>
              </div>
              {
                mobileSideBarTaps.map((item, index) => (
                  <div onClick={() => { setPage(item.page);  setSideBar(false)}} key={index} className="h-10" >
                    <div className="flex gap-3 items-center h-full pl-5 w-4/5 rounded-[10px] ml-[10px]" >
                     {item.icon2}
                      <p className="font-bold text-xl text-[#415760]" >
                        {item.name} 
                      </p>
                    </div>
              </div>
                ))
              }
            </div>
            <div className="pl-10 border-b pb-5 border-[#B6B6BC]">
              <button className="flex gap-2 bg-[#E9CEEE] py-3 w-36 rounded-[10px] pl-2" >
                <BiLogOut className="text-3xl text-[#FF0000]" />
                <p className="font-semibold text-lg" >Logout</p>
              </button>
            </div>
            <div className="flex justify-center items-center gap-4 font-bold h-14" >
                <a href="" className="text-[#B6B6BC]" > Policies </a>
                <a href="" className="text-[#B6B6BC]" > Supports </a>
                <a href="" className="text-[#B6B6BC]" > Help Center </a>
            </div>
        </div>}
        <Mobilenav setSideBar={setSideBar} setPage = {setPage} />
        <div className="min-h-[1500px] px-5 pt-16 " >
          {renderMobilePage()}
        </div>
      </div>
      <div className="hidden md:grid">
        <Navbar2 items={items} activePage={activePage} setPage={setPage} setActivePage={setActivePage} profileModal={profileModal} setProfileModal={setProfileModal} />
        <div className="flex flex-1 min-h-screen" >
          <div className="w-[280px] background-color4 relative" >
            <div className="flex mt-3 flex-col gap-1 min-h-48 font-bold text-gray-400 items-center" >
              <img src={assets["profile1-logo"]} width={150} />
              <p className="text-[12px]" >Hey, Abihsolo</p>
              <p className="text-[10px]" >10/10/22</p>
              <p className="text-[10px]" >BTech Computer Science</p>
            </div>
            <div className="h-16 flex justify-center items-center background-color10 mt-1" >
                <p className="text-color7 font-extrabold ">
                  Greetings, <br /> Mr/Mrs Abihsolo
                </p>
            </div>
            <div className="pl-4" >
              <div onClick={()=>setPage("dashboard")} className="background-color9 cursor-pointer flex items-center pl-3 gap-1 font-bold text-lg h-10 rounded-r-lg mt-5 border-[#F8DBFD] border-l-4 w-4/5">
                <RiDashboardFill className="text-[#85CD88]" />
                <p className="text-color6" >Dashboard</p>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="pl-4">
              {
                sideBarTaps.map((item,index) => (
                  <div key={index} onClick={() => { setPage(item.page); setActivePage(item.page)}} className={ activePage == item.page ? `flex border-[#F8DBFD] cursor-pointer border-l-4 w-4/5 bg-[#272B2B] py-2 pl-3 items-center gap-2 justify-between` : `flex hover:border-[#F8DBFD] cursor-pointer transition-all hover:border-l-4 w-4/5  hover:bg-[#272B2B] py-2 pl-3 items-center gap-2 justify-between`} >
                <div>
                  <img src={item.icon} alt="" />
                </div>
                    <div className="w-full text-[#7A7B7B] font-bold">{ item.name}</div>
              </div>
                ))
              }
            </div>
            <hr className="mt-2 " />
            <div className="pl-4">
              {
                sideBarTaps2.map((item, index) => (
                  <div key={index} className="flex hover:border-[#F8DBFD] cursor-pointer hover:border-l-4 w-4/5 transition-all hover:bg-[#272B2B] py-2 pl-3 items-center gap-2 justify-between" >
                <div>
                  <img src={item.icon} alt="" />
                </div>
                    <div className="w-full text-[#7A7B7B] font-bold">{ item.name}</div>
              </div>
                ))
              }
            </div>
            <div className="absolute bottom-0 pl-7 w-full" >
              <div className="flex gap-2 cursor-pointer pl-3 bg-[#272B2B] py-2 rounded-[10px] w-40 items-center" >
                <BsBoxArrowLeft className="text-3xl text-[#ECBDBB]" />
                <p className="font-bold text-xl text-[#7A7B7B]">
                  Logout
                </p>
              </div>
              <div className="flex text-[12px] cursor-pointer text-[#7A7B7B] font-bold mt-3 justify-evenly" >
                <a>Policies</a>
                <a>Supports</a>
                <a>Help center</a>
              </div>
            </div>
          </div>
          <div className="w-full " >
              <div className="min-h-52 background-color4 " >
                <div className="flex justify-between pl-1" >
                  <div><CgMenu className="font-bold text-2xl text-white" /></div>
                  <div className="flex cursor-pointer gap-2 h-10 px-7 rounded-xl overflow-hidden items-center background-color9 mr-5" >
                    <div> 
                      <img width={20} src={assets["notification-logo"]}/>
                    </div>
                    <div className="border-l pl-2"> 
                      <img width={20} src={assets["ai-logo"]}/>
                    </div>
                    <div  className="flex border-l h-5 pl-2"> 
                      <img width={20} src={assets["mail-logo"]}/>
                    </div>
                    <div > 
                      <img width={20} src={assets["letter-logo"]}/>
                    </div>
                    <div className="border-l pl-2"> 
                      <img width={20} src={assets["settings-logo"]}/>
                    </div>
                    <div> 
                      <img width={20} src={assets["settings2-logo"]}/>
                    </div>
                    
                  </div>
              </div>
            </div>
          {
            renderPage()
            }
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashbaoard