'use client'

import { useState } from "react"
import style from './style.module.css'


const form = ['name', 'surname', 'address', 'password']

export default function Task3() {
    const [obj, setObj] = useState({
        name: '',
        surname: '',
        address: '',
        password: ''
    })

    const getData = (e) => {
        setObj({ ...obj, [e.target.name]: e.target.value })
    }

    return (
        <>
            <p>
                3. Создайте форму для ввода данных. По клику на кнопку получите данные из input
                и отобразите в консоль
            </p>

            <div className={style.form}>

                {form.map((el, i) =>
                    <div key={i}>
                        <input onChange={getData} name={el} placeholder={` Enter your: ${el}`} />
                    </div>)}

                <div>
                    <button onClick={() => console.log(obj)}>enter data</button>
                </div>

            </div >


        </>
    )
}

