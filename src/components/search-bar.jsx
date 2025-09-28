import { CgSearch } from "react-icons/cg"; 

const Searchbar = () => {
  return (
     <div className="flex items-center" >
            <CgSearch className="font-bold text-gray-300 -mr-5 mt-1 z-10" />
            <input type="search" className="background-color9 pl-6 text-white py-1 border-gray-700  w-56 rounded-xl border" />
          </div>
  )
}

export default Searchbar