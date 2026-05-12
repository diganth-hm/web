import { BookOpen, LogOut,LibraryBig,BookOpenText } from "lucide-react";
function Sidebar()
{
    return(
        <div className="bg-blue-800 h-screen w-1/5 rounded-lg   text-white">
         <div className="flex bg-blue-900 items-center gap-3 rounded-lg ">
           <div className="flex mt-10 ml-12 mb-10">
            <LibraryBig size={45}/>
            <h1 className="ml-5 text-3xl font-bold">LibraryMS</h1>
            </div>
            </div>   

         <button className="w-full p-10">
            <div className="flex items-center gap-3  hover:bg-blue-700 transition p-3 rounded-lg ">
            <BookOpen size={30} className="ml-8"/>
            <span className="text-3xl mb-1 ">Browse Books</span>
         </div>
         </button>
         
         <button className="w-full p-10">
            <div className="flex items-center gap-3  hover:bg-blue-700 transition p-3 rounded-lg ">
            <BookOpenText size={30} className="ml-8"/>
            <span className="text-3xl mb-1 ">My Books</span>
         </div>
         </button>
         
         <button className="w-full p-10">
            <div className="flex items-center gap-3  hover:bg-blue-700 transition p-3 rounded-lg ">
            <LogOut size={30} className="ml-8"/>
            <span className="text-3xl mb-1 ">Logout</span>
         </div>
         </button>
 

        </div>
    )

}
export default Sidebar;