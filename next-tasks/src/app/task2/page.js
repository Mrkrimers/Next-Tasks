'use client'

import { useState } from "react"
import style from './style.module.css'


const form = ['name', 'surname', 'address', 'password']

export default function Task2() {
    const [obj, setObj] = useState({
        name: '',
        surname: '',
        address: '',
        password: ''
    })

    const getData = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }

    const validator = () => {
        if (/^[a-zA-Z]+/gm.test(obj.name) && (/^[a-zA-Z]+/gm.test(obj.surname)) && (/^[a-zA-Z]+/gm.test(obj.address)) && (/^[a-zA-Z-_0-9]+@[a-z]+.[a-z]{2,10}/gm.test(obj.password))) alert(true)
    }

    return (
        <>
            <p>2. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля.
                По клику на кнопку проверить вводимые данные на регулярные выражения. В
                случае успешной валидации – alert(true)
            </p>

            <div className={style.form}>

                {form.map((el, i) =>
                    <div key={i}>
                        <input onChange={getData} name={el} placeholder={` Enter your ${el}`} />
                    </div>)}

                <div>
                    <button onClick={validator}>enter data</button>
                </div>

            </div>
        </>
    )
}