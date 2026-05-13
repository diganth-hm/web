import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
function User() {
  return (
    <div className="p-5 rounded-full flex h-screen" >
      <Sidebar />
      <div className="flex-1">  <Navbar/></div>
   

    </div>
  );
}

export default User;