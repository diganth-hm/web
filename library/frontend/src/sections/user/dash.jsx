import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Bookcard from "../../components/bookcard"
function User() {
 const books=[
  {
    title:"The Alchemist",
    author:"paulo Coelho",
    category:"Fiction",
    image :"https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
   {
    title:"The Atomic Habits",
    author:"James Clear",
    category:"self help",
    image : "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
   {
    title:"The Midnight Library",
    author:"Matt Haigh",
    category:"Fiction",
    image :  "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg"
  },
   {
    title:"Rich Dad Poor Dad",
    author:"Robert T.kiyosaki",
    category:"Finance",
    image :        "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
  }
 ]




  return (
    <div className="p-5 rounded-full flex h-screen" >
      <Sidebar />
      <div className="flex-1">  <Navbar/>
      </div>
   <div className="p-8">
    <h1 ClassName="text-3xl font-bold">Browse Books</h1>
   </div>

    </div>
  );
}

export default User;