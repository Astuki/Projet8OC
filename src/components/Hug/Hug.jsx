import downArrow from "../../assets/ArrowForCollapseDown.png"
import { useState } from "react"

export default function Hug({ showDropdowns = [true, true, false, false], contents = [], titles = [], IsLogementPage}) {

    const logementPage = IsLogementPage ? "maximum-width logement-page" : "maximum-width";

    const [selected1, setSelected1] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);
    const [selected4, setSelected4] = useState(false);
  
    const toggle1 = () => {
      setSelected1(!selected1);
    };
  
    const toggle2 = () => {
      setSelected2(!selected2);
    };
  
    const toggle3 = () => {
      setSelected3(!selected3);
    };
  
    const toggle4 = () => {
      setSelected4(!selected4);
    };
    
    return(
        <div className={logementPage}>
          {showDropdowns[0] && (
            <div onClick={toggle1} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[0]}</p>
                    <img className={selected1 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[0] && <p className={selected1 ? "content show" : "content"}>{contents[0]}</p>}

          {showDropdowns[1] && (   
            <div onClick={toggle2} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[1]}</p>
                    <img className={selected2 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[1] && <p className={`content ${selected2 ? "show" : ""} ${titles[1] === 'Equipements' && selected2 ? 'equipments-content' : ''}`}>{contents[1]}</p>}

          {showDropdowns[2] && (
            <div onClick={toggle3} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[2]}</p>
                    <img className={selected3 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[2] &&   <p className={selected3 ? "content show" : "content"}>{contents[2]}</p>}

          {showDropdowns[3] && (
            <div onClick={toggle4} className="dropdown">
                <div className="wrapper">
                    <p className="wrapper_text">{titles[3]}</p>
                    <img className={selected4 ? "rotate-animation" : "wrapper_upArrow"} src={downArrow}></img>
                </div>
            </div>
          )}
          {showDropdowns[3] &&  <p className={selected4 ? "content show" : "content"}>{contents[3]}</p>} 
        </div>
    )
}

