function Footer() {
    return(
        <div className="wrapper-div">
         <div className="md:grid md:grid-cols-7 p-10" style={{background: 'rgba(253, 212, 191, 1)'}}>
            <div className="logo">
                <img src="/Images/logo.svg" width="300px" height="38px" className=" cursor-pointer" alt="logo"/>
            </div>
            <div className="About">
                  <ul className="p-2">  
                      <li className="font-bold font-[Poppins] m-1 md:text-xl">About</li>
                      <li className="font-[Poppins] ">Vision &amp; Mission</li>
                      <li className="font-[Poppins] ">Team</li>
                      <li className="font-[Poppins] ">Packages</li>
                  </ul>
            </div>
            <div className="Services">
                <ul className="p-2"> 
                    <li className="font-bold font-[Poppins] m-1 md:text-xl">Services</li>
                    <li className="font-[Poppins] ">Rapid Prototyping</li>
                    <li className="font-[Poppins] ">UI/UX Design</li>
                    <li className="font-[Poppins] ">Mobile App Development</li>
                    <li className="font-[Poppins] ">Web Development</li>
                    <li className="font-[Poppins] ">Cloud Services</li>
                </ul>
            </div>
            <div className="Why Us">
                <ul> 
                    <li className="font-bold font-[Poppins] m-1 md:text-xl">Why Us</li>
                    <li className="font-[Poppins] ">Case Studies</li>
                    <li className="font-[Poppins] ">Engagement Models</li>
                    <li className="font-[Poppins] ">Our Process</li>
                </ul>
            </div>
            <div className="Why Us">
                <ul className="p-2"> 
                    <li className="font-bold font-[Poppins] m-1 md:text-xl">Blogs</li>
                    <li className="font-bold font-[Poppins] m-1 md:text-xl">Careers</li>
                 </ul>
            </div>
          <div className="Contact Us">
               <div className=" md:text-xl">
                  <h1 className="font-bold font-[Poppins] m-1">
                      Contact Us
                  </h1>  
                </div>
            <div className="Address1 font-[Poppins] ">
               <ul className="p-2">
                   <li className="flex">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>&nbsp;info@stackmybiz.com</span>
                   </li>
                   <li className="flex">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                       <span>&nbsp;(+1) 510-761-5117</span>
                    </li>
                    <li className="flex">
                        <img src="/Images/icons/usa-flag.png" alt="usa-flag-icon" className="w-6 h-6"/> 
                        <span> &nbsp;5602 Pandorea Terrace,<br/> Newark, CA, 94560, USA</span>
                   </li>
               </ul>
            </div>
            <div className="Address2 mt-2 font-[Poppins]">
            <ul className="p-2">
                 <li className="flex">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>&nbsp;
                       (+91) 7050002221
                    </li>
                    <li className="flex">
                        <img src="/Images/icons/india-flag.png" alt="usa-flag-icon" className="w-min h-min"/>&nbsp;
                        Honeycomb Infotech,<br/> Tagore Hill Road, <br/>Ranchi Jharkhand, India - 834006
                   </li>
               </ul>
            </div>
         </div>
         <div className="Follow Us  row-span-2">
             <div>
                 <h2 className=" md:text-xl font-bold "> Follow Us</h2>
             </div>
            <div className="social-media-icons flex p-2">
                <img src="/Images/icons/facebook.png" alt="facebook-icon" className=" ml-2  w-min h-min" />
                <img src="/Images/icons/twitter.png" alt="facebook-icon" className="  ml-2 w-min h-min" />
               <img src="/Images/icons/linkedin.png" alt="facebook-icon" className=" ml-2  w-min h-min" />
            </div>
         </div>
        </div>
        </div>
    )
}export default Footer;