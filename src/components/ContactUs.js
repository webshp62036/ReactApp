function ContactUs(){
/* Address Object  start */
const AddressDetails=[
    {
    "Email":"info@stackmybiz.com",
    "Phone":"(+1) 510-761-5117",
    "Address":{
          "Street":"5602 Pandorea Terrace,",
          "City":"Newark, CA, 94560, "
         },
    },
    {
     "Phone":"(+91) 7050002221",
     "Address":
        {
          "Street":"Honeycomb Infotech,",
          "City":"Tagore Hill Road,",
          "County":"Ranchi Jharkhand, India - 834006"
        }
    }
]
/* Address Object End */
 return(
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
                    <span>&nbsp;{AddressDetails[0].Email}</span>
                   </li>
                   <li className="flex">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                       <span>&nbsp;{AddressDetails[0].Phone}</span>
                    </li>
                    <li className="flex">
                        <img src="/Images/icons/usa-flag.png" alt="usa-flag-icon" className="w-6 h-6"/> 
                        <span> &nbsp;{AddressDetails[0].Address.Street}<br/>{AddressDetails[0].Address.City}</span>
                   </li>
               </ul>
            </div>
            <div className="Address2 mt-2 font-[Poppins]">
            <ul className="p-2">
                 <li className="flex">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>&nbsp;{AddressDetails[1].Phone}
                    </li>
                    <li className="flex">
                        <img src="/Images/icons/india-flag.png" alt="usa-flag-icon" className="w-min h-min"/>&nbsp;
                        {AddressDetails[1].Address.Street}<br/>{AddressDetails[1].Address.City}<br/>{AddressDetails[1].Address.County}
                   </li>
               </ul>
            </div>
           
         </div>
    );
} export default ContactUs;