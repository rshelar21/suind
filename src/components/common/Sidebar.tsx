import { PiDroneBold } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="py-4 pl-4 pr-6 bg-gray-900 font-ibm-mono">
      <div className="flex flex-col w-full justify-between h-full">
        <div>
          <div className="bg-gray-800 p-2 rounded-full w-fit h-fit">
            <PiDroneBold className="text-white w-6 h-6" />
          </div>

          <div className="pt-10">
            <Link to="/">
              <div className="flex items-center text-white gap-4 bg-gray-800 py-2 px-3 rounded-lg cursor-pointer">
                <BsFillGridFill className="w-5 h-5" />
                <p className="font-medium">Dashboard</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="">
          <div
            className="flex items-center text-white gap-4 bg-gray-800 py-2 px-3 rounded-lg cursor-pointer"
            onClick={handleLogout}
          >
            <IoLogOut className="w-5 h-5" />
            <p className="font-medium">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
