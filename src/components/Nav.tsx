import Image from "next/image";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center p-4 text-gray-400 shadow-lg">
            {/* SEARCH */}
            <div className=" hidden md:flex text-xs items-center gap-2 rounded-full px-2 shadow-md ring-[1.5px] ring-gray-300 ">
                <Image src="/search.png" alt="searchIcon" width={14} height={14} />
                <input type="text" placeholder="Search . . . " className=" w-[200px] p-2 bg-transparent outline-none" />
            </div>
            {/* USER AND ICON*/}
            <div className="flex items-center justify-end gap-6 w-full ">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={29} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={29} />
                <div className=" absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-[#E53935] text-white text-xs rounded-full">2</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-800 leading-3 font-medium">John Doe</span>
                    <span className="text-[10px] text-gray-500 text-right">admin</span>
                </div>
                <Image src="/avatar.png" alt="avatar" width={36} height={36} className=" rounded-full"/>
            </div>
        </div>
    );
}

export default NavBar;