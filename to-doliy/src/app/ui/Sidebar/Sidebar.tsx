//imports
import Link from "next/link";

// logos
import { IoMdHome, IoIosStats, IoMdSettings } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { CiCalendar, CiMenuKebab } from "react-icons/ci";
import { MdSchedule } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


export default function Sidebar() {

const menuItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <IoMdHome/>,
    },
    {
        title: "To-do list",
        path: "/dashboard/Task-Management-Page",
        icon: <LuListTodo />,
    },
    {
        title: "Time Logger",
        path: "/dashboard/Time-Logger-Page",
        icon: <CiCalendar />,
    },
    {
        title: "Schedules",
        path: "/dashboard/Scheduler-Page",
        icon: <MdSchedule />,
    },
    {
        title: "Statistics",
        path: "/dashboard/Statistics",
        icon: <IoIosStats />,
    },
    {
        title: "Mood & Energy",
        path: "/dashboard/Mood-Page",
        icon: <FaHeart />,
    },
    {
        title: "Settings",
        path: "/dashboard/Settings-Page",
        icon: <IoMdSettings />,
    },
]
    return (
        <div className="p-4 bg-[#F9D965] rounded-3xl h-full flex flex-col justify-between">
            <p className="mb-4 font-bold text-3xl text-shadow-lg shadow-black">To-doliy:</p>
            {/* Menu Items */}
            <div className="flex flex-col gap-1 text-2xl font-light">
            {menuItems.map((item, index) => (
                <Link href={item.path} key={index} className="flex items-center text-black gap-2 p-2 rounded-lg hover:bg-[#ffe9b3] transition-colors duration-200">
                {item.icon}
                <span>{item.title}</span>
                </Link>
            ))}
            </div>

            {/* User Profile Section */}
            <div className="mt-auto">
            <div className="rounded-full bg-[#FFB22C] text-center p-2 mt-4 ">
            <div className="grid grid-cols-2 items-center text-2xl">
                <div>User</div>
                <div className="flex justify-end">
                    <CiMenuKebab className="cursor-pointer hover:text-gray-700 transition-colors duration-200" />
            </div>
            </div>
            </div>
        </div>
        </div>
    );
}