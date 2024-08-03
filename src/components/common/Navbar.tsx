import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex w-full justify-end shadow-sm pl-4 pr-2 py-2.5 items-center bg-white">
        <div className="flex items-center gap-1">
            <img src="/assets/images/user.svg" alt="" className="w-[35px] h-[35px]"/>
            <HiOutlineDotsVertical className="w-4 h-4 text-gray-500" />
        </div>
    </div>
  );
};

export default Navbar;
