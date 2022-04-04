function Benefits(props){
    const{title,content,image}=props.Data;
     return(
         <div className="main-div">
             <div className="md:grid md:grid-cols-2  ">
              <div className=" items-center ml-auto mr-auto  md:w-1/2 md:border-l-2 md:border-dotted md:border-sky-400 " >
                 <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-3 rounded-full hidden md:block" viewBox="0 0 20 20" fill="currentColor" style={props.style}>
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                    <h2 className="font-bold text-xl -tracking-wide font-[Poppins] ml-2 -mt-2 ">{title}</h2><br/>
                 </div>
                 <p className="font-[Poppins] pb-3 pl-10 ">{content}</p>
               </div>
                <div className=" md:w-1/2 mt-auto mb-auto ml-auto mr-auto">
                   <img src={image} alt="heros" width="280" height="auto"/>
               </div>
          
             </div>
         </div>
     )
 }export default Benefits;
