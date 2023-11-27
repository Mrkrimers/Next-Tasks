'use client'
import { useState } from 'react'
import style from './style.module.css'


export default function Task7() {
    const [bool, setBool] = useState(false)

    return (
        <>
            <p>
                7. Создайте кнопки Показать текст, Скрыть текст, параграф. Используйте useState
                для отслеживания текущего выбора пользователя. В зависимости от выбора,
                отображайте соответствующий контент
            </p>

            <div>
                <button className={style.btn} onClick={() => setBool(!bool)}>
                    {bool ? 'hide' : 'show'}
                </button>
            </div>

            <div>
                {bool ? <p> HelloY World </p> : <></>}
            </div>
        </>
    )
}