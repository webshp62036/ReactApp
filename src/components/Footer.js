function Footer() {
    return(
        <div className="wrapper-div">
         <div className="md:grid md:grid-cols-7 p-10" style={{background: 'rgba(253, 212, 191, 1)'
}}>
            <div className="logo">
                <img src="/Images/logo.svg" width="300px" height="38px" className=" cursor-pointer" alt="logo"/>
            </div>
            <div className="About">
                  <ul>  
                      <li className="font-bold font-[Poppins] m-1 text-xl">About</li>
                      <li className="font-[Poppins] ">Vision &amp; Mission</li>
                      <li className="font-[Poppins] ">Team</li>
                      <li className="font-[Poppins] ">Packages</li>
                  </ul>
            </div>
            <div className="Services">
                <ul> 
                    <li className="font-bold font-[Poppins] m-1 text-xl">Services</li>
                    <li className="font-[Poppins] ">Rapid Prototyping</li>
                    <li className="font-[Poppins] ">UI/UX Design</li>
                    <li className="font-[Poppins] ">Mobile App Development</li>
                    <li className="font-[Poppins] ">Web Development</li>
                    <li className="font-[Poppins] ">Cloud Services</li>
                </ul>
            </div>
            <div className="Why Us">
                <ul> 
                    <li className="font-bold font-[Poppins] m-1 text-xl">Why Us</li>
                    <li className="font-[Poppins] ">Case Studies</li>
                    <li className="font-[Poppins] ">Engagement Models</li>
                    <li className="font-[Poppins] ">Our Process</li>
                </ul>
            </div>
            <div className="Why Us">
                <ul> 
                    <li className="font-bold font-[Poppins] m-1 text-xl">Blogs</li>
                    <li className="font-bold font-[Poppins] m-1 text-xl">Careers</li>
                 </ul>
            </div>
        </div>
        </div>
    )
}export default Footer;