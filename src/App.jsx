import { useState } from "react"

import "./App.css";

import Tag from "./components/Tag/Tag";
import PosCard from "./components/poscard/poscard";
import tagData from "./assets/datas/tagdata.json";
import PosCards from "./assets/datas/possibilities.json"
import Modal from "./components/modal/modal";


const App = () => {

    const [openModal, setOpenModal] = useState(false);

    let n = tagData.length;
    const arr = [], cardData = [];
    for (let i = 0; i < n; i++){
        arr.push(tagData[i].title);        
    }
    n = PosCards.length;
    for (let i = 0; i < n; i++){
        cardData.push(PosCards[i]);
    }

    return <div className="main">
        <div className="poscards">
            <h2>Возможности Ed Space</h2>
            <p>Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</p>
            <div className="poscards__container">
                {cardData.map((item, index) => <PosCard 
                key = {index}
                imgs = {item.image}
                title = {item.title}
                text = {item.text}
                />
                )}
            </div>
            <button className="btnTryFree" onClick={e => setOpenModal(true)} >Попробовать бесплатно</button>
        </div>
        <div className="proposal">
            <h2>Выбирайте Ed Space сегодня и вы получите</h2>
            <div className="tags">
                {arr.map((item, index) => <Tag value={item} key={index}/>)}
            </div>
        </div>
        {/* {openModal && <Modal setOpenModal={setOpenModal}/>} */}
        {<Modal openModal={openModal} setOpenModal={setOpenModal}/>}
    </div>
}

export default App;
