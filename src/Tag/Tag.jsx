import "./Tag.css";

import CheckImg from "../assets/ok-circle.svg";

const Tag = ({Value, Num}) => {        
    return <div className="tags__item" key = {Num}>
        {Value}
        <img src={CheckImg} alt="" />
    </div>
}

export default Tag;