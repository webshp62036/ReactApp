function cloudServiceCard(props){
    const{title,image}=props.Data;
    
    return(
    <div className="wrapper-div  sm:w-fit md:w-1/5 md:ml-5 mt-5  rounded-lg  shadow-sm border-2 border-x-red-300 shadow-red-300 cursor-pointer hover:shadow-lg " style={props.ParentBg}>
        <div className="row-span-2 font-[Poppins]">
            <div className=" md:p-10 p-5 rounded-t-lg ">
                <img src={image}  alt="aws" className="ml-auto mr-auto w-10 h-10"/>
                <p className="text-center" style={props.style}>{title} </p>
            </div>
            <div className=" md:p-10 p-5  rounded-t-lg" style={props.ChildBg}>
             <ul className=" list-item">
                  {
                  props.Services.map(data => (  
                    <li className="text-sm flex mt-1" >  
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 -ml-3 rounded-full" viewBox="0 0 20 20" fill="currentColor" >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                     <span className="ml-1"> {data}</span>
                      
                   </li>  
                 ))
                 }  
             </ul>
             </div>
        </div>
    </div>
    );
}export default cloudServiceCard;