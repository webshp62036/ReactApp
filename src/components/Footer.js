
import ContactUs from "./ContactUs";
import CopyRight from "./CopyRight";
import Elements from "./Elements";
function Footer() {
    return(
        <div className="wrapper-div" style={{background: 'rgba(253, 212, 191, 1)'}}>
         <div className="md:grid md:grid-cols-7 p-10" >
            <div className="logo">
                <img src="/Images/logo.svg" width="300px" height="38px" className=" cursor-pointer" alt="logo"/>
            </div>
            <div className="About">
                 <Elements text1="About" text2="Vision &amp; Mission" text3="Team" text4="Packages"/>
            </div>
            <div className="Services ">
                <Elements text1="Services" text2="Rapid Prototyping" text3="UI/UX Design" text4="Mobile App Development" text5="Web Development" text6="Cloud Services"/>
              </div>
            <div className="Why Us">
                <Elements text1="Why Us" text2="Case Studies" text3="Engagement Models" text4="Our Process" />
            </div>
            <div className="Why Us">
                <ul className="p-2"> 
                    <li className="font-bold font-[Poppins] m-1 md:text-xl">Blogs</li>
                    <li className="font-bold font-[Poppins] m-1 md:text-xl">Careers</li>
                 </ul>
            </div>
          <div className="Contact Us">
               <ContactUs/>
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
        <CopyRight/>
        </div>
    )
}export default Footer;