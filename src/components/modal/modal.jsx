import { useState } from "react"; 

import "./modal.css";

import MLogo from "../../assets/images/logo_EdSpase.png";
import MClose from "../../assets/images/cancel.png";

const Modal = () => {
    return <div className="modal__wrapper">
        <div className="modal">
            <div className="modal__logo">
                <img src={MLogo} alt="" />
            </div>
            <div className="modal__close">
                <img src={MClose} alt="" />
            </div>
            <div className="modal__main">
            <label>
                <span>Имя Фамилия</span>
                <input type="text" />
            </label>
            <label>
                <span>Название организации</span>
                <input type="text" />
            </label>
            <label>
                <span>Должность</span>
                <input type="text" />
            </label>
            <label>
                <span>Email</span>
                <input type="text" />
            </label>
            <label>
                <span>Телефон</span>
                <input type="text" />
            </label>
            <div className="modal__main-pdataproc">
                <input type="checkbox" className="modal__main-checkbox"/><span>Я согласен на обработку моих <u>персональных данных</u></span>
            </div>
            <button className="modal__main-button">ОТПРАВИТЬ</button>
        </div>
        </div>

    </div>
}

export default Modal;