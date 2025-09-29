/* eslint-disable react/prop-types */
import Input from "../../components/input"
const ChangePasswordPage = () => {
  return (
    <>
      <div className="md:hidden" >
        <div className="flex justify-center my-5 items-center" >
           <p className="font-bold text-xl" >University Management system</p>
        </div>
         <div className="background-color10 text-[#A2A2A9] px-7 py-4 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863]">
          <p className="font-bold text-lg text-black" >Create new password</p>
          <p className="text-[10px]" >Your current password should be different from your previous used passwords</p>
          <div className="mt-5" >
            <form>
              <div className="">
                 <label htmlFor="current-password" className="font-bold text-sm">Current password</label> <br />
                <Input type="password" placeholder={""} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="new-password" className="font-bold text-sm">New password</label> <br />
                <Input type="text" placeholder={""} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="new-password" className="font-bold text-sm">Comfirm password</label> <br />
                <Input type="text" placeholder={""} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
            
              <div className="flex gap-5 mt-4 mb-5" >
                <button className="bg-[#5C5DA4] rounded px-4 p-2 text-white font-bold" type="submit" >Submit</button>
                <button type="reset" className="font-bold" >Cancel</button>
              </div>
            </form>
            <a className="font-bold" >
              Forget password?
            </a>
          </div>
        </div>
      </div>
    <div className="hidden md:grid background-color10 min-h-screen pb-10 px-5">
      <div className="min-h-40 border flex justify-center " >
        <div className="background-color10 min-h-56 w-[500px] text-[#A2A2A9] px-7 py-4 -mt-32 shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863]">
          <p className="font-bold text-lg text-black" >Create new password</p>
          <p className="text-[10px]" >Your current password should be different from your previous used passwords</p>
          <div className="mt-5" >
            <form>
              <div className="">
                 <label htmlFor="current-password" className="font-bold text-sm">Current password</label> <br />
                <Input type="password" placeholder={""} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="new-password" className="font-bold text-sm">New password</label> <br />
                <Input type="text" placeholder={""} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
              <div className="mt-3">
                 <label htmlFor="new-password" className="font-bold text-sm">Comfirm password</label> <br />
                <Input type="text" placeholder={""} styles="bg-transparent py-2 px-3 border border-[#CDC9ED] w-full rounded-[7px]" />
             </div>
            
              <div className="flex gap-5 mt-4 mb-5" >
                <button className="bg-[#5C5DA4] rounded px-4 p-2 text-white font-bold" type="submit" >Submit</button>
                <button className="font-bold" >Cancel</button>
              </div>
            </form>
            <a className="font-bold" >
              Forget password?
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-[#F68D88] font-bold text-[13px] mt-10" >
        <p>Do not share your password with anyone.don&apos;t use index number,date of birth,phone number as password</p>
        <p>
          Copyright &copy;2024 Altbit Groups of Companies
        </p>
      </div>
    </div>
    </> 
  )
}

export default ChangePasswordPage