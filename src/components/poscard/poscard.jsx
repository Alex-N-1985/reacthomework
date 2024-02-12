import "./poscard.css";

const PosCard = ({imgs, title, text}) => {

    return <div className="poscard">
        <img src={imgs} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
}