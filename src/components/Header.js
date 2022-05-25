import react,{useState} from "react";
import './header.css';

const Header = (props) => {
  const [searchItem,updatesearchItem] = useState("");
    return(

      <div className="flex-col">
<header className="flex-col items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 ">
  <div className="flex flex-col items-center justify-center ">
  <img src={require('./logo.png')} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-12 h-12 rounded-full mx-1" />
    <span class="text-white font-semibold text-5xl tracking-tight my-3">NewsTalk</span>
    <span className="text-white text-center font-semibold text-2xl tracking-tight my-3">Get latest news at your finger tips and voice commands with<span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-center flex item-center justify-center">NewsTalk Voice Assistance Application</span></span>
  </div>
  
  <div class="flex items-center justify-center ">
    <div class="flex border-2 border-gray-200 rounded">
        <input value={searchItem} onChange= {(e)=>updatesearchItem(e.target.value)}type="text" class="px-4 py-2 w-80" placeholder="Search..."/>
    </div>
        <img onClick={()=>props.search(searchItem)} src={require(`./search.png`)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-10 h-10 rounded-full mx-1" />
</div>
  
</header>


      </div>
        
      
    )
}

export default Header;