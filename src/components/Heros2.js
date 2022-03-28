import Button from "./Button";

function Heros2(props){

   const{image,title,content}=props.Data;
   const buttonStyle={
       backgroundColor:"none",
       color:'rgba(255, 114, 94, 1)',
       marginLeft:"0",
       paddingLeft:"0",
       display:"inline",
       
   }
    return(
        <div className="main-div">
            <div className="md:grid md:grid-cols-2 p-10">
              <div className=" md:ml-32  md:p-10 md:w-1/2 p-2">
                  <img src={image} alt="heros" width="400" height="auto"/>
              </div>
              <div className=" items-center md:p-10 mt-5  md:w-1/2">
                  <h2 className="font-bold text-xl -tracking-wide font-[Poppins]">{title}</h2><br/>
                  <p className="font-[Poppins]">{content}</p>
                    <div className="flex">
                       <Button text="Read More" style={buttonStyle}/>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-2" style={{color:'rgba(255, 114, 94, 1)',marginLeft:'-11px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                       </svg>
                    </div>
              </div>
            </div>
        </div>
    )
}export default Heros2;
