import { useState, useRef, useEffect } from "react"
import upArrow from "../../assets/ArrowForCollapseUp.png"

const Collapse = ({ title, content }) => {
    const [isClosed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isClosed);
    };
  

    const ref = useRef(null)

    useEffect(() => {
        if(isClosed) setHeight(ref.current?.getBoundingClientRect().height)
        else setHeight(0)
    }, [isClosed])

    const [height, setHeight] = useState(0)

    return (
      <div key={title} onClick={toggleCollapse} className="collapse-container">
        <div
          className={`collapse-container__title ${
            isClosed ? "" : "collapse-container__title--open"
          }`}
        >
          <span className="collapse-container__title-txt">{title}</span>
          <img className={isClosed ? 'collapse-container__content__arrow' : 'collapse-container__content__arrow--open'} src={upArrow}/>
        </div>
  
        <div
          className={isClosed ? 'collapse-container__content--open' : 'collapse-container__content'} style={{height}}
        >

        <div ref={ref}>
          <p>{content}</p>
        </div>

        </div>
      </div>
    );
  };
  
  export default Collapse;

  /** Styling  */