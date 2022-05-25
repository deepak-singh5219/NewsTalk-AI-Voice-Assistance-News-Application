import react,{useState,useEffect} from "react";

const Navbar = (props) => {

  let [date,setDate] = useState(new Date());
  const [category,setcategory]=useState("");

  useEffect(() => {
    let timer = setInterval(()=>setDate(new Date()), 1000 );
    return function cleanup() {
        clearInterval(timer)
    }

});

// const EventClick = (val) => {
// setcategory(val);
//   val.preventDefault();
//   props.fetchnews(val);
// }


    return(
        <div > 
            <nav className="z-40 flex items-center justify-between drop-shadow-3xl flex-wrap bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
     <img src={require('./logo.png')} className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-10 h-10 rounded-full mx-1" />
    <span class="font-semibold text-xl tracking-tight">NewsTalk</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a onClick={() => props.fetchnews("business")} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-teal-200 mr-4 cursor-pointer">
        Business
      </a>
      <a onClick={() => props.fetchnews("health")} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-teal-200 mr-4 cursor-pointer">
        Health
      </a>
      <a onClick={() => props.fetchnews("technology")} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-teal-200 mr-4 cursor-pointer">
        Technology
      </a>
      <a onClick={() => props.fetchnews("science")} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-teal-200 mr-4 cursor-pointer">
        Science
      </a>
      <a onClick={() => props.fetchnews("sports")} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-teal-200 mr-4 cursor-pointer">
        Sports
      </a>
      <a onClick={() => props.fetchnews("entertainment")} class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 block mt-4 lg:inline-block lg:mt-0 text-lg text-white hover:text-teal-200 mr-4 cursor-pointer">
        Entertainment
      </a>
      
    </div>
    <div className="flex-col">
    <p className="text-lg text-white"> Time : {date.toLocaleTimeString()}</p>
            <p className="text-lg text-white"> {date.toDateString()}</p>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;
