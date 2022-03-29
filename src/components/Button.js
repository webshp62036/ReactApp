
function Button(props){
    
    return(
        <div className="text-white md:ml-5 rounded-3xl text-center w-min ml-auto mr-auto " style={props.style} >
             <input type="button" value={props.text} className="  cursor-pointer md:top-[-10] p-1 pl-4 pr-4 font-[Poppins] " />
     </div>
    )
} export default Button;