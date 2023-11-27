'use client'
import style from './style.module.css'


const form = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin']

export default function Task5() {



    return (
        <>
            <p>5. Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map. New York, London, Tokyo, Paris, Berlin.
                Добавить событие клика с распознаванием на какой именно li был совершен клик</p>

            <div className={style.wrapper}>
                {form.map((el, i) => <p onClick={(e) => console.log(e.target.outerText)} className={style.parr} key={i}>{el}</p>)}
            </div>
        </>
    )
}