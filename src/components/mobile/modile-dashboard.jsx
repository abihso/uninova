/* eslint-disable react/prop-types */
import Mobileprofile from "../../components/mobile/mobile-profile";
import MobileCourseStats from "../../components/mobile/mobile-course-stats";
import Announcement from "../../components/announcement";
import TimesTable from "../../components/times-table";
import Calendar from "react-calendar";
import Cardinfo from "../../components/card-info"
const MobileDashboard = ({ dailyScheduleData
  
}) => {
  return (
    <>
       <Mobileprofile />
          <MobileCourseStats />
          <div className="mt-3" >
            <Announcement />
          </div>
          <TimesTable />
          <div className="shadow-[0_0_30px_rgba(0,0,0,0.2)] border -mt-8 rounded-xl border-[#16181863]" >
            <Calendar />
          </div>
         <div className="pt-3 h-80 px-5 shadow-[0_0_30px_rgba(0,0,0,0.2)]  mt-5 rounded-xl border-[#16181863]" >
           <Cardinfo color1={"#DAC1DE"} color2={"#F8DBFD"} title={"Daily Schedules"} data={dailyScheduleData} />
         </div>
    </>
  )
}

export default MobileDashboard