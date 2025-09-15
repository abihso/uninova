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
const Dashbaoard = () => {
  const [value, onChange] = useState(new Date());
  const [profileModal,setProfileModal] = useState("")
  const [page,setPage] = useState("dashboard")
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
      page:"accounts"
    },
    {
      name: "Schedules",
      icon: assets["schedules-logo"]
    },
    {
      name: "Results",
      icon: assets["schedules-logo"],
      page:"results"
    },
    {
      name: "Register",
      icon: assets["schedules-logo"],
      page:"register"
    },
  ]
  const sideBarTaps2 = [
    {
      name: "Resources",
      icon: assets["accounts-logo"]
    },
    {
      name: "Events",
      icon: assets["schedules-logo"]
    },
    {
      name: "Communities",
      icon: assets["schedules-logo"]
    },
  ]
  const items = [
    {
      name: "Home",
      to: "home",
      logo:assets["home-logo"]
    },
    {
      name: "Time Table",
      to: "timestable",
      logo:assets["timestable-logo"]
    },
    {
      name: "Examination",
      to: "examination",
      logo:assets["exams-logo"]
    },
    {
      name: "Change Password",
      to: "change-password",
      logo:assets["password-logo"]
    }
  ]
  return (
    <div className="hidden md:grid">
      <Navbar2 items={items} setPage={setPage} profileModal={profileModal} setProfileModal={setProfileModal} />
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
              sideBarTaps.map((item, index) => (
                <div key={index} onClick={()=> setPage(item.page)} className="flex hover:border-[#F8DBFD] cursor-pointer hover:border-l-4 w-4/5  hover:bg-[#272B2B] py-2 pl-3 items-center gap-2 justify-between" >
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
                <div key={index} className="flex hover:border-[#F8DBFD] cursor-pointer hover:border-l-4 w-4/5  hover:bg-[#272B2B] py-2 pl-3 items-center gap-2 justify-between" >
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
                <div className="flex gap-2 h-10 px-7 rounded-xl overflow-hidden items-center background-color9 mr-5" >
                  <div> 
                    <img width={20} src={assets["notification-logo"]}/> </div>
                  <div className="border-l pl-2"> 
                    <img width={20} src={assets["ai-logo"]}/> </div>
                  <div  className="flex border-l h-5 pl-2"> 
                    <img width={20} src={assets["mail-logo"]}/> </div>
                  <div > 
                    <img width={20} src={assets["letter-logo"]}/> </div>
                  <div className="border-l pl-2"> 
                    <img width={20} src={assets["settings-logo"]}/> </div>
                  <div> 
                    <img width={20} src={assets["settings2-logo"]}/> </div>
                  
                </div>
            </div>
          </div>
         {
          renderPage()
          }
         
        </div>
      </div>
    </div>
  )
}

export default Dashbaoard