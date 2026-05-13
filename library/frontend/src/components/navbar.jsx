import { Menu, Bell,UserPen } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full bg-white p-4 flex items-center justify-between">
      

      <div className="flex items-center">
        
        <button className="p-2 hover:bg-gray-200 transition rounded-lg">
          <Menu size={32} />
        </button>

        <input
          type="text"
          placeholder="Search books by title, author or category..."
          className="bg-gray-100 p-3 rounded-3xl w-[500px] outline-none ml-6"
        />
      </div>

<div calssName="flex gap-5">
      <button className="p-2 hover:bg-gray-200 rounded-full transition">
        <Bell size={28} />
      </button>
     <button><UserPen size={10} className="ml-10  bg-blue-500 rounded-3xl h-10 w-10"/>
     </button>
</div>
    </div>
  );
}

export default Navbar;