/* eslint-disable react/prop-types */

const Navbar = ({links}) => {
  return (
    <nav className="flex gap-10">
      {
        links.map((item, index) => <a className="cursor-pointer font-bold hover:text-[#FE0F12]" href={item.to} key={index} >
          {item.name}
        </a>)
      }
    </nav>
  )
}

export default Navbar