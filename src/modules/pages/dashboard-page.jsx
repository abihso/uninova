/* eslint-disable react/prop-types */
import Card1 from "../../components/card1"
import Cardinfo from "../../components/card-info"
import Reminder from "../../components/reminder"
import Announcement from "../../components/announcement"
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css"
import assets from "../../assets/assets"
import TimesTable from "../../components/times-table"


const Dashboardpage = ({onChangeCalendar,valueCalendar,assignmentData,messagesData,dailyScheduleData}) => {
  return (
    <div  className="background-color10 pb-10 px-5" >
            <div className="flex justify-between items-center" >
              <div className="-mt-36 w-full" >
                <p className="font-bold text-white" >Attendance</p>
                <div className="flex w-full flex-wrap justify-between gap-3 items-center" >
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                <Card1 />
                </div>
              </div>
              
            </div>
            <div className="grid grid-cols-12 gap-3 mt-4" >
              <div className="col-span-8 grid gap-3 pb-5 grid-cols-12" >
                <Reminder />
                <Announcement />
              </div>
              <div className="col-span-4 flex h-96 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl pt-7 overflow-hidden " >
                <Calendar className="w-full h-full"  onChange={onChangeCalendar} value={valueCalendar} />
              </div>
            </div>
            <div  className="grid grid-cols-12 gap-3" >
              <div className="col-span-8 pt-3 h-80  px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden" >
                <Cardinfo color1={"#DAC1DE"} color2={"#F8DBFD"} title={"Assignment"} data={assignmentData} />
              </div>
              <div className="col-span-4 pt-3 h-80 text-white bg-[#01032D]  px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl  overflow-hidden" >
                 <div className="flex justify-between items-center">
                  <p className="font-bold">Linked Lectures</p>
                  <p className="text-xs">view all</p>
                </div>
                <div className="flex justify-between pt-2 pb-2 bg-[#0E1037] h-10 items-center pr-2">
                  <div className="h-8 w-20">
                    <img src={assets["profile1-logo"]} className="h-full" alt="" />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-sm" >Mr.Godfred Kusi[mentor]</p>
                    <p className="text-[10px]">Programming with C++</p>
                  </div>
                  <div>
                    <img src={assets["mail-logo"]} alt="" />
                  </div>
                </div>
                <div className="flex justify-between pt-2 mt-2 pb-2 bg-[#0E1037] h-10 items-center pr-2">
                  <div className="h-8 w-20">
                    <img src={assets["profile1-logo"]} className="h-full" alt="" />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-sm" >Mr.Godfred Kusi[mentor]</p>
                    <p className="text-[10px]">Programming with C++</p>
                  </div>
                  <div>
                    <img src={assets["mail-logo"]} alt="" />
                  </div>
                </div>
                <div className="flex justify-between pt-2 mt-2 pb-2 bg-[#0E1037] h-10 items-center pr-2">
                  <div className="h-8 w-20">
                    <img src={assets["profile1-logo"]} className="h-full" alt="" />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-sm" >Mr.Godfred Kusi[mentor]</p>
                    <p className="text-[10px]">Programming with C++</p>
                  </div>
                  <div>
                    <img src={assets["mail-logo"]} alt="" />
                  </div>
                </div>
                <div className="flex justify-between pt-2 mt-2 pb-2 bg-[#0E1037] h-10 items-center pr-2">
                  <div className="h-8 w-20">
                    <img src={assets["profile1-logo"]} className="h-full" alt="" />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-sm" >Mr.Godfred Kusi[mentor]</p>
                    <p className="text-[10px]">Programming with C++</p>
                  </div>
                  <div>
                    <img src={assets["mail-logo"]} alt="" />
                  </div>
                </div>
                <div className="flex justify-between pt-2 mt-2 pb-2 bg-[#0E1037] h-10 items-center pr-2">
                  <div className="h-8 w-20">
                    <img src={assets["profile1-logo"]} className="h-full" alt="" />
                  </div>
                  <div className="w-full">
                    <p className="font-bold text-sm" >Mr.Godfred Kusi[mentor]</p>
                    <p className="text-[10px]">Programming with C++</p>
                  </div>
                  <div>
                    <img src={assets["mail-logo"]} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div  className="grid mt-5 grid-cols-12 gap-3" >
              <div className="col-span-8 pt-3 h-80  px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl overflow-hidden" >
                <Cardinfo color1={"#DAC1DE"} color2={"#F8DBFD"} title={"Messages"} data={messagesData} />
              </div>
              <div className="col-span-4 pt-3 h-80 px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl  overflow-hidden" >
                 <Cardinfo color1={"#DAC1DE"} color2={"#F8DBFD"} title={"Daily Schedules"} data={dailyScheduleData} />
              </div>
            </div>
           <TimesTable />
            <p className="text-sm -mb-6 text-[#B2B4B9] font-bold" >Copyright&copy; {`${new Date().getFullYear()}`}.All rights reserved</p>
          </div>
  )
}

export default Dashboardpage