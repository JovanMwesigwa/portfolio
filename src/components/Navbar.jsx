import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full hidden md:block">
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={'/'}>
              <span className="text-white text-base font-bold">
                Jovan Mwesigwa
              </span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to={'/work'}>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Works
              </p>
            </Link>
            <Link to={'/tutorials'}>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Tutorials
              </p>
            </Link>
            <Link to={'/articles'}>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Articles
              </p>
            </Link>
            <Link to={'/projects'}>
              <p className="text-gray-300 hover:text-white cursor-pointer">
                Projects
              </p>
            </Link>
          </div>
          <div>
            <button className="bg-yellow-500 text-sm hover:bg-black hover:text-yellow-500 text-stone-900 font-bold py-2 px-4 rounded">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
