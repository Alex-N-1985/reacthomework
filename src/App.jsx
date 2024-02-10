import "./App.css";

import CheckImg from "./assets/ok-circle.svg";

const tagData = [
    "Неограниченное колличество учеников",
    "Трансляции",
    "Точная статистика",
    "Производительную видеосвязь с учениками",
    "Продукт с ежемесячной подпиской",
    "Лучшая конфиденциальность и защита",
    "Готовый шаблон для организации обучения",
    "Сообщества",
    "Любое количество уроков и учебных программ"
]

const Tag = ({Value, Num}) => {        
    return <div className="tags__item" key = {Num}>
        {Value}
        <img src={CheckImg} alt="" />
    </div>
}


const App = () => {
    let n = tagData.length;
    const arr = []
    for (let i = 0; i < n; i++){
        arr.push(tagData[i]);        
    }
    return <div className="proposal">
        <h2>Выбирайте Ed Space сегодня и вы получите</h2>
        <div className="tags">
            {arr.map((item, index) => <Tag Value={item} key={index}/>)}
        </div>
    </div>
}

export default App;
