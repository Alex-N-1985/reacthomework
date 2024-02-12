import "./Tag.css";

import CheckImg from "../../assets/images/ok-circle.svg";

const Tag = ({value, num}) => {        
    return <div className="tags__item" key = {num}>
        {value}
        <img src={CheckImg} alt="" />
    </div>
}

export default Tag;