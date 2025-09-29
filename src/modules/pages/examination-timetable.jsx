/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai"; 

const Examination = ({setPage}) => {
  return (
    <>
    <div className="md:hidden min-h-screen pb-10  mt-1 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863]">
     <div className="flex pt-5 px-5" >
          <p className="font-bold text-xl" >End Of Semester Examination Time Table</p>
          <AiOutlineClose className="text-3xl" onClick={() => setPage("")} />
       </div>
     <div className="px-5 mt-10"><p className="font-bold text-base">Examination Available Time Table</p></div>
      <div className="bg-[#E7C4EE] px-5 py-5 mt-4" >
        <div className="grid grid-cols-12 w-full pb-4 justify-around">
          <div className="col-span-3 font-bold text-base" >Date</div>
          <div className="col-span-3 font-bold text-base" >Time</div>
          <div className="col-span-3 font-bold text-base" >Exams Hall</div>
          <div className="col-span-3 font-bold text-base text-center" >Course</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
        <div className="grid grid-cols-12 w-full border-b-2 py-1 items-center border-[#B49BBA] text-xs justify-around">
          <div className="col-span-3" >Monday</div>
          <div className="col-span-3" >19:30 am</div>
          <div className="col-span-3" >SFR4</div>
          <div className="col-span-3 text-center" >Programming with C++</div>
        </div>
      </div>
    </div>
    <div className="hidden md:grid background-color10 min-h-screen pb-10 px-5">
      <div className="min-h-40 flex justify-center " >
        <div className="-mt-36 w-3/4" >
          <p className="text-center text-white font-bold text-lg mb-5" >Examination Time Table</p>
          <div className="background-color10  py-5 px-10 min-h-40 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863]" >
            <div className=" grid grid-cols-12" >
              <div className="col-span-3 w-full font-bold" >Date</div>
              <div className="col-span-3 w-full font-bold" >Time</div>
              <div className="col-span-3 w-full font-bold" >Examination Hall</div>
              <div className="col-span-3 w-full font-bold" >Course Title</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
            <div className=" grid grid-cols-12 mt-3 border-b border-[#9A99A0] pb-2" >
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >2nd May, 2024 Tue</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >19:30am</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >New Lap</div>
              <div className="col-span-3 w-full text-sm text-[#9A99A0]" >Programming with C++</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Examination