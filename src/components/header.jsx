import { Link, Outlet } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="nav p-10 shadow-sm border-b ">
        <div className="flex justify-between lg:w-[80%] mx-auto">
          <Link to="/">Home</Link>

          <div className="flex gap-5">
            <Link to="/lga">Lga</Link>
            <Link to="/pu">Polling Units</Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 min-h-screen">
        <div className=" lg:w-[80%] mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}
export default Header
