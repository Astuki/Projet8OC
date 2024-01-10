import { useState, useRef, useEffect } from "react"
import upArrow from "../../assets/ArrowForCollapseUp.png"

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  

    const ref = useRef(null)

    useEffect(() => {
      const screenWidth = window.innerWidth;
  
      if (isOpen) {
          if (screenWidth > 800) {
              setHeight(ref.current?.getBoundingClientRect().height * 1.4);
          } else {
              setHeight(ref.current?.getBoundingClientRect().height + 25);
          }
      } else {
          setHeight(0);
      }
  }, [isOpen]);

    const [height, setHeight] = useState(0)

    return (
      <div key={title} onClick={toggleCollapse} className="collapse-container">
        <div
          className={`collapse-container__title ${
            isOpen ? "" : "collapse-container__title--open"
          }`}
        >
          <span className="collapse-container__title-txt">{title}</span>
          <img className={isOpen ? 'collapse-container__content__arrow' : 'collapse-container__content__arrow--open'} src={upArrow}/>
        </div>
  
        <div
          className={isOpen ? 'collapse-container__content--open' : 'collapse-container__content'} style={{height}}
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