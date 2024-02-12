import "./App.css";

import Tag from "./components/Tag/Tag";

import tagData from "./assets/datas/tagdata.json";

const App = () => {
    let n = tagData.length;
    const arr = []
    for (let i = 0; i < n; i++){
        arr.push(tagData[i].title);        
    }
    return <div className="main">
        <div className="poscards">
            <h2>Возможности Ed Space</h2>
            <p>Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка.</p>
        </div>
        <div className="proposal">
            <h2>Выбирайте Ed Space сегодня и вы получите</h2>
            <div className="tags">
                {arr.map((item, index) => <Tag value={item} key={index}/>)}
            </div>
        </div>
    </div>
}

export default App;
