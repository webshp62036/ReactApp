function Dot(props){
    
    return(
        <div className="wrapper-div flex">
            <div className="first-dot w-3 h-3 ml-2 mr-2 mt-auto mb-auto rounded-full cursor-pointer hover: border-red-400 " style={props.bgColor}></div>
            <div className="first-dot w-3 h-3 ml-2 mr-2 mt-auto mb-auto rounded-full cursor-pointer hover: border-red-400 " style={props.bgColor}></div>
            <div className="first-dot w-3 h-3 ml-2 mr-2 mt-auto mb-auto rounded-full cursor-pointer hover: border-red-400 " style={props.bgColor}></div>

        </div>
    )
}export default Dot;