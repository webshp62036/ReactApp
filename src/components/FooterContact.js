import Button from "./Button"

function FooterContact(){
    const bgColor={
        background:'rgba(248, 251, 255, 1)'
    }
    const buttonColor={
        background: 'rgba(3, 44, 87, 1)',
        poostion:'absolute',
       
       
    }

     return(
         <div className="wrapper-div">
           <div className="w-full p-5 md:p-10  border-dotted border-t-4" style={bgColor}>
               <h1 className="text-xl font-[Poppins] tracking-wide font-bold text-center" style={{color:'rgba(242, 100, 25, 1)'}}>Got a business idea? </h1>
                <p className="font-[Poppins] text-sm text-center">Get to market faster with Stackmybiz. </p>
              <div className="items-center justify-center ">
                 <Button text="Contact Us" style={buttonColor}/>
             </div>
           </div>
         </div>
     )
} export default FooterContact;