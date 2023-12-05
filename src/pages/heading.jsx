import {react} from 'react';
//import '../styles/styleSignup.css'

function Heading(props){
    return(
        <div className="content-heading">
            <div className="y-style">
                <div className="logo">
                    <img className="ImgLogoU" src={props.logo1} alt="Logo"></img>
                </div>
                <div className="welcome">
                    {props.wel}                  
                </div>
                <div className="logo">
                <img className="ImgLogoP" src={props.logo2} alt="Logo"></img>
                </div>
            </div>
        </div>
    )
}

export default Heading;