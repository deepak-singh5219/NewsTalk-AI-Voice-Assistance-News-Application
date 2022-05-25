import react from 'react';

const Footer = () =>{
    return (
        
<footer class="p-4 bg-slate-700 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
<span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">Newstalk- </a> Under development testing build
</span>
<ul class="flex flex-wrap items-center mt-3 text-sm text-white dark:text-gray-400 sm:mt-0">
<li>
<a href="https://docs.google.com/document/d/1qeF7m8nbH57FL7x7oDQvclPIY-Q5CEuXKoHISyV5k6o/edit?usp=sharing" class="mr-4 hover:underline md:mr-6 cursor-pointer ">About</a>
</li>
<li>
 <a href="#" class="mr-4 hover:underline md:mr-6 cursor-pointer">Privacy Policy</a>
</li>

<li>
<a href="https://www.linkedin.com/in/deepaksingh5219/" class="hover:underline">Contact</a>
</li>
</ul>
</footer>


    )
}

export default Footer;