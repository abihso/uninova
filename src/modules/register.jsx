import Logo from "../components/logo"
import Navbar from "../components/nav-bar"
import assets from "../assets/assets.js"
import Input from "../components/input.jsx"
const Register = () => {
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
      name: "about Us",
      to:"/about-us"
    },
    {
      name: "Contact Us",
      to:"/contact-us"
    },
  ]
  return (
    <div className="hidden md:grid grid-cols-12 min-h-screen" >
       <div className="background-color8 col-span-7 pl-5 " >
        <div className="h-16 flex items-center pl-5  " >
          <Navbar links={links || []} />
        </div>
        <div className="border border-[#16181863] pl-5 shadow-[0_0_30px_rgba(0,0,0,0.55)] mt-2
         min-h-[700px] rounded-l-2xl background-color8">
            <div className="mt-20" >
              <p className="text-color3 text font-extrabold text-[5rem]" >Congratulation</p>
              <p className="pl-3 text-color3 -mt-5 text-3xl font-bold" >in advance dear😇  </p>
              <p className="pl-3 text-color3 font-bold" >create account us a student </p>
          </div>
          <div className=" flex justify-center" >
              <img src={assets["register-logo"]} alt="login image" />
          </div>
          
        </div>
      <div className="text-[10px] text-color5 text-center mt-10" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum veritatis quos, corrupti voluptate totam nobis assumenda. Veniam ipsa, saepe quibusdam, similique odio sint omnis minus praesentium cupiditate quae eligendi corrupti debitis beatae nisi dolor corporis pariatur facilis aperiam placeat? Delectus sequi eos provident quis amet officia fugiat tempora consequatur!
      </div>
      </div>
      <div className="background-color5 col-span-5 pr-5" >
        <div className="h-16 flex justify-end items-center pr-24 " >
          <Logo f="Uni" l="Nova" styles="text-color4 text-logo1" lstyles="text-color6"  />
        </div>
       
        <div className="border border-[#16181863] pl-14 shadow-[0_0_30px_rgba(0,0,0,0.55)] mt-2
         h-[700px] rounded-r-2xl background-color4" >
            <div className="mt-28" >
              <p className="text-color6 font-bold" >
                University Management System
            </p>
             {/* Form */}
            <div className="text-xs text-white" >
              <p className="font-bold mt-12" >enter your account details</p>
                <form>
                  <div className="mt-7 w-3/4" >
                    <div className="grid grid-flow-col gap-3 col-span-12 " >
                      <div className="col-span-6" >
                      <Input type={"text"} name={"indexnumber"} placeholder={"index number"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                      </div>
                      <div className=" col-span-6 flex" >
                      <Input type={"text"} name={"admissionnumber"} placeholder={"admission number"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                      </div>
                    </div>
                    <div className="grid grid-flow-col mt-5 gap-3 col-span-12 " >
                      <div className="col-span-6" >
                      <Input type={"text"} name={"firstname"} placeholder={"first name"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                      </div>
                      <div className=" col-span-6 flex" >
                      <Input type={"text"} name={"othername"} placeholder={"other names"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                      </div>
                  </div>
                    <Input type={"file"} name={"othername"} placeholder={"other names"} styles={"bg-transparent border-b border-gray-700 p-3 w-full"} />
                    <div className="flex justify-center mt-10">
                        <button className="background-color7 p-2 w-full rounded-md text-color3 font-extrabold" >create</button>
                    </div>
                  </div>
              </form>
              <div className="mt-10 items-end flex w-3/4 justify-between" >
                    <a href="" className="text-xs" >Forgot password</a> <button className="text-color6 background-color3 p-2 font-extrabold text-[13px] rounded-md w-[100px]" >sign in</button>
              </div>
              </div>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Register