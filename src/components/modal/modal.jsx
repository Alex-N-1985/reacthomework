import { useState } from "react"; 

import "./modal.css";

import MLogo from "../../assets/images/logo_EdSpase.png";
import MClose from "../../assets/images/cancel.png";

const Modal = (
    setOpenModal,
    openModal
) => {

    const [name, setName] = useState("");
    const [orgname, setOrgName] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEMail] = useState("");
    const [phone, setPhone] = useState("");
    const [pdataproc, setPDataProc] = useState(false);

    const closeHandler = () => {
        setOpenModal(false);
        // setName("");
        // setOrgName("");
        // setPosition("");
        // setEMail("");
        // setPhone("");
        // setPDataProc(false);
    }

    const handler = (e) => {
        const data = {
            name, 
            orgname, 
            position, 
            email, 
            phone
        };
        console.log(data);
        closeHandler();
    }

    return <div className={openModal ? "modal__wrapper active" : "modal__wrapper"}>
        <div className="modal">
            <div className="modal__logo">
                <img src={MLogo} alt="" />
            </div>
            <div 
                className="modal__close"
                onClick={closeHandler}
            >
                <img src={MClose} alt="" />
            </div>
            <div className="modal__main">
            <label>
                <span>Имя Фамилия</span>
                <input 
                    type="text" 
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                />
            </label>
            <label>
                <span>Название организации</span>
                <input 
                    type="text"
                    value={orgname}
                    onChange={ (e) => setOrgName(e.target.value)}
                />
            </label>
            <label>
                <span>Должность</span>
                <input 
                    type="text"
                    value={position}
                    onChange={ (e) => setPosition(e.target.value)}
                />
            </label>
            <label>
                <span>Email</span>
                <input 
                    type="text"
                    value={email}
                    onChange={ (e) => setEMail(e.target.value)}
                />
            </label>
            <label>
                <span>Телефон</span>
                <input 
                    type="text"
                    value={phone}
                    onChange={ (e) => setPhone(e.target.value)}
                />
            </label>
            <div className="modal__main-pdataproc">
                <input 
                    type="checkbox" 
                    className="modal__main-checkbox"
                    value={pdataproc}
                    onChange={ (e) => setPDataProc(e.target.value)} 
                />
                <span>Я согласен на обработку моих <u>персональных данных</u></span>
            </div>
            <button 
                className="modal__main-button"
                onClick={handler}
            >ОТПРАВИТЬ</button>
        </div>
        </div>

    </div>
}

export default Modal;