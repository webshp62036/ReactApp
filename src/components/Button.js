
function Button(props){
    
    return(
        <div className="text-white ml-5 rounded-3xl w-min" style={props.style} >
             <input type="button" value={props.text} className="cursor-pointer md:top-[-10] p-1 pl-4 pr-4 font-[Poppins]" />
    
        </div>
    )
} export default Button;