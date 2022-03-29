import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Header(){
        const navBg={
            background:'rgba(253, 212, 191, 1)'
        }
        const buttonBg={
          background:'rgba(4, 66, 132, 1)'
      }
        // nav links
      let Links=[
          {name:"About Us",link:"/about"},
          {name:"Services",link:"/service"},
          {name:"Packages",link:"/package"},
          {name:"Why Us",link:"/whyus"},
          {name:"Blogs",link:"/blogs"},
          {name:"Careers",link:"careers"},
        ];
      let[open,setOpen]=useState(false);
     //style={open?{display:'block'}:{display:'none'}}
      return(
          <div className="top-0 left-0 fixed w-full  " style={navBg}>
            <div className="md:flex items-center justify-between">
            <div>
              <div className="md:flex py-2 ml-10 items-center mx-10">
                 <img src="/Images/logo.svg" width="300px" height="38px" className=" cursor-pointer" alt="logo"/>
              </div>
              <div className="nav-icon absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                    <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12':'M4 6h16M4 12h16m-7 6h7'} />
                 </svg>
              </div>
            </div>
               <ul className="md:flex mr-10 p-5 transition-all duration-500 ease-in md:static"   >
                     {
                       Links.map((link)=>(
                        <li key={link.name} className="md:ml-5 ml-10 "> 
                            <Link to={link.link} className="cursor-pointer text-gray-600 font-[Poppins] hover:text-zinc-900">{link.name}</Link>
                        </li>
                       ))
                     }
                   <Button text="Contact Us" style={buttonBg}/>
                </ul>
            </div>
          </div> 
      );
    }
  export default Header;



 