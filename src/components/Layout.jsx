import '../App.css'
import Navbar from './Navbar'

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="">
        <div className="w-full my-5 h-72 bg-stone-700 rounded-md"></div>

        {children}

        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Layout
