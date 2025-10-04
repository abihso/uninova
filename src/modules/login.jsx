import { GrFormClose } from "react-icons/gr"; 
import { BsFillEyeSlashFill } from "react-icons/bs"; 
import { BsFillEyeFill } from "react-icons/bs"; 
import Logo from "../components/logo"
import Navbar from "../components/nav-bar"
import assets from "../assets/assets.js"
import Input from "../components/input.jsx"
import { useState } from "react";
const Login = () => {
  const handleLogin = (e) => {
      e.preventDefault()
      window.location.href = "/dashboard"
  }
  const [password,setPassword] = useState("password")
  const links = [
    {
      name: "Home",
      to:"/home"
    },
    {
      name: "News",
      to:"/news"
    },
    {
      name: "about us",
      to:"/about-us"
    },
    {
      name: "Contact us",
      to:"/contact-us"
    },
  ]
  return (
    <>
    <div className="md:hidden grid grid-cols-12">
      <div className="fixed px-6 pt-5 overscroll-contain top-8 left-4 right-4 bottom-4 bg-[#F9E9FC] shadow-[0_0_30px_rgba(0,0,0,0.2)] rounded-xl border-[#16181863] " >
        <div className="flex justify-between items-center" >
          <GrFormClose className="text-3xl" />
          <Logo f="Uni" l="Nova" styles="text-color4 text-logo1" lstyles="text-black " />
        </div>
       <div className="mt-10" >
          <p className="text-color3 text font-[1000] text-[2rem]" >Welcome back,</p>
          <p className="text-color3 -mt-3 text-xl font-bold" >Dear😇  </p>
          <p className="text-color3 text-sm font-bold" >login to access your account</p>
          </div>
          <div>
            <p className="font-bold text-2xl mt-5" >Login</p>
            <p className="font-bold text-xs " >enter your account details</p>
            <form onSubmit={ handleLogin } >
                  <div className="mt-7 " >
                    <div>
                      <Input type={"text"} name={"indexnumber"} placeholder={"index number"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                    </div>
                    <div className="flex" >
                      <Input type={password} name={"password"} placeholder={"password"} styles={"bg-transparent w-full border-b mt-5 border-gray-700 p-3 "} />
                      <div className=" flex items-end -ml-7 mb-1" >
                      {
                        password == "password" ? <BsFillEyeFill onClick={() => setPassword("text")} className="text-lg text-gray-700" /> : <BsFillEyeSlashFill onClick={() => setPassword("password")} className="text-lg text-gray-700" />
                      }
                      </div>
                  </div>
                      <div className="flex justify-center mt-10">
                        <button className="bg-[#1C2020] rounded-[7px] p-2 w-full text-[#F4F4F4] font-extrabold" >Login</button>
                      </div>
                  </div>
              </form>
              <div className="mt-10 items-end flex  justify-between" >
                <a href="" className="text-xs" >Forgot password</a> <button className="text-color6 bg-[#F68D88] p-2 font-extrabold text-[13px] rounded-[7px] w-[100px]" >sign up</button>
              </div>
          </div>
      </div>
     <div className="col-span-4 bg-[#1A1E1E] min-h-screen"></div>
     <div className="col-span-8 bg-[#F2E3F5]" >
      
     </div>
    </div>
    <div className="hidden md:grid grid-cols-12 min-h-screen inter" >
      <div className="background-color5 col-span-4 pl-12" >
        <div className="h-16 flex items-center pl-24 " >
            <Logo f="Uni" l="Nova" styles="oi text-color4 text-logo1" lstyles="text-color6 inter"  />
        </div>
       
        <div className="border border-[#16181863] pl-14 shadow-[0_0_30px_rgba(0,0,0,0.55)] mt-2
         h-5/6 rounded-l-2xl background-color4" >
            <div className="mt-28" >
              <p className="text-color6 font-bold" >
                University Management System
              </p>
             {/* Form */}
            <div className="text-xs text-white" >
              <p className="font-bold mt-12" >enter your account details</p>
                <form onSubmit={ handleLogin } >
                  <div className="mt-7 w-3/4" >
                    <div>
                      <Input type={"text"} name={"indexnumber"} placeholder={"index number"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                    </div>
                    <div className="flex" >
                      <Input type={password} name={"password"} placeholder={"password"} styles={"bg-transparent w-full border-b mt-5 border-gray-700 p-3 "} />
                      <div className=" flex items-end -ml-7 mb-1" >
                      {
                        password == "password" ? <BsFillEyeFill onClick={() => setPassword("text")} className="text-lg text-gray-700" /> : <BsFillEyeSlashFill onClick={() => setPassword("password")} className="text-lg text-gray-700" />
                      }
                      </div>
                  </div>
                      <div className="flex justify-center mt-10">
                        <button className="background-color7 rounded-[7px] p-2 w-full text-color3 font-extrabold" >Login</button>
                      </div>
                  </div>
              </form>
              <div className="mt-10 items-end flex w-3/4 justify-between" >
                    <a href="" className="text-xs" >Forgot password</a> <button className="text-color6 bg-[#F68D88] p-2 font-extrabold text-[13px] rounded-[7px] w-[100px]" >sign up</button>
              </div>
              </div>
            </div>
        </div>
      </div>
      <div className="background-color8 col-span-8 pr-12  " >
        <div className="h-16 pl-5 flex items-center " >
          <Navbar links={links || []} />
        </div>
        <div className="border border-[#16181863] pl-5 shadow-[0_0_30px_rgba(0,0,0,0.55)] mt-2
         h-5/6 rounded-r-2xl background-color8">
            <div className="mt-20" >
              <p className="text-color3 font-extrabold text-[5rem]" >Welcome back,</p>
              <p className="pl-3 text-color3 -mt-5 text-3xl font-bold" >Dear😇  </p>
              <p className="pl-3 text-color3 font-bold" >login to access your account</p>
          </div>
          <div className=" flex justify-center" >
              <img src={assets["login-logo"]} alt="login image" />
          </div>
          
        </div>
      <div className="text-[10px] text-color5 text-center mt-10" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum veritatis quos, corrupti voluptate totam nobis assumenda. Veniam ipsa, saepe quibusdam, similique odio sint omnis minus praesentium cupiditate quae eligendi corrupti debitis beatae nisi dolor corporis pariatur facilis aperiam placeat? Delectus sequi eos provident quis amet officia fugiat tempora consequatur!
      </div>
      </div>
    </div>
    </>
  )
}

export default Login