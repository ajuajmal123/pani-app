import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Header() {
  return (
    
      <header className=" bg-[#80bfff] shadow-md py-3 px-6 flex items-center justify-between flex-wrap gap-4 sticky top-0 z-50">

      <Link to='/'><h1 className="text-white text-2xl font-bold tracking-wide ">
            <span className="text-gray-900">P</span>
            ani
        </h1></Link> 
        <div className="relative w-full max-w-xs"> 
        <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-white"/>
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 "/>
        </div>
        <ul className="flex gap-x-6 text-white font-medium text-sm md:text-base">
          <Link to='/'>  <li>Home</li></Link>
           <Link to='browse-jobs'><li>Jobs</li></Link> 
           <Link to='about'> <li>About</li></Link>
           <Link to='signUp'> <li>Sign-Up</li></Link>
        </ul>
      </header>

  )
}

export default Header
