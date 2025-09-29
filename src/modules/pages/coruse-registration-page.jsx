import Input from "../../components/input"

const CoruseRegistrationPage = () => {
  return (
    <>
    <div className="hidden md:grid background-color10 min-h-screen pb-10 px-5">
      <div className="min-h-40 border flex justify-center " >
        <div className="background-color10 min-h-56 w-[500px] px-7 py-4 -mt-32 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863]">
          <p className="font-bold text-lg" >Course Registration</p>
          <div className="mt-5" >
            <form>
              <div className="">
                 <label htmlFor="program" className="font-bold text-sm">Program of Study</label> <br />
                <Input type="text" placeholder={"BSc Computer Science"} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="program" className="font-bold text-sm">Academic Year</label> <br />
                <Input type="text" placeholder={"2024-2025"} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="program" className="font-bold text-sm">Level</label> <br />
                <Input type="text" placeholder={"300"} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="program" className="font-bold text-sm">Semester</label> <br />
                <Input type="text" placeholder={"second"} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
              </div>
              <div className="flex justify-center mt-4 " >
                  <button className="bg-[#01032D] rounded px-4 p-2 text-white font-bold" type="submit" >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CoruseRegistrationPage