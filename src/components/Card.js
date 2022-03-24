

function Card(props){
    const cardStyle={
        background: 'rgba(255, 114, 94, 1)'
}
    return(
        <div className="h-1/5 md:w-1/6 pt-5 m-5  sm:w-11/12 rounded-lg p-10" style={cardStyle}>
              <img src={props.link} alt="icons" width="36px" height="36px" className="item-center mx-auto mt-4"/>
               <h3 className="text-center text-white font-[Poppins] mt-2">{props.title}</h3> 
        </div>
    )
}export default Card;



