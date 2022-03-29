import Button from "./Button";

function Customer(){

    const buttonStyle={
        backgroundColor:"none",
        color:'rgba(255, 114, 94, 1)',
        marginLeft:"0",
        paddingLeft:"0",
        display:"inline",
        
    }
      return(
          <div className="md:flex justify-center mt-5">
              <div className=" items-center md:w-1/2 p-10">
                  <h2 className="font-bold font-[Poppins] capitalize text-2xl -tracking-wider">Our <span style={{color:'rgba(255, 114, 94, 1)'}}>Customers</span></h2>
                  <p className="font-[Poppins]">
                  We’ve worked with customers globally to create beautifully designed, engaging, and sustainable products. We have been successful in developing 
                  long-term technology partnerships with our customers to help them achieve their business goals. Our success lies in your success, and together 
                  we bring value to your end-customers. Our diverse spectrum of customers has enabled us to complete projects in various industries and work with different engagement models. 
                  </p>
              </div>
              <div className="md:w-1/3  md:mb-auto md:mt-auto ">
              <div className="flex">
                       <Button text="Read More" style={buttonStyle}/>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-2" style={{color:'rgba(255, 114, 94, 1)',marginLeft:'-11px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                       </svg>
                    </div>
              </div>
          </div>
      )
}export default Customer;