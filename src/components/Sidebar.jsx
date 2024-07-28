// React
import { useContext } from "react";

// React Router
import { Link } from "react-router-dom";

// Theme
import { ThemeContext } from "../context/ThemeContext";

// Icons
import { FaBook } from "react-icons/fa";
import { IoMoon, IoSunny, IoCallSharp } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { MdCampaign } from "react-icons/md";

const Sidebar = () => {
  // Handle Theme Toggle
  const { toggle, handleToggle } = useContext(ThemeContext);

  return (
    <div className="w-[300px] h-full flex flex-col gap-16 py-5 px-7">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-orange-600 dark:text-green-500 font-extrabold text-2xl font-playwrite select-none">
            toingg
          </h1>
        </div>
        <div className="cursor-pointer" onClick={handleToggle}>
          {!toggle && <IoMoon className="text-xl" />}
          {toggle && <IoSunny className="fill-white text-xl" />}
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-4 select-none">
          <MdCampaign className="dark:fill-green-500 " />
          <Link to="/" className="dark:text-white">
            Campaigns
          </Link>
        </div>
        <div className="flex items-center gap-4 select-none">
          <FaBook className="dark:fill-green-500" />
          <Link to="/knowledge-base" className="dark:text-white ">
            Knowledge Base
          </Link>
        </div>
        <div className="flex items-center gap-4 select-none">
          <IoIosCreate className="dark:fill-green-500 " />
          <Link to="/create-campaign" className="dark:text-white">
            Create Campaign
          </Link>
        </div>
        <div className="flex items-center gap-4 select-none">
          <IoCallSharp className="dark:fill-green-500" />
          <Link to="/make-call" className="dark:text-white">
            Make Call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
