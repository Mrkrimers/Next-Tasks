'use client'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import axios from 'axios'

export default function Task8() {
    const [api, setApi] = useState('');

    const getData = async function () {
        const res = await axios.get('https://api.ipify.org/?format=json')
        console.log(res);
        setApi(res.data.ip)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <p>
                8. Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через клиентский компонент)
            </p>


            <div className={style.wrapper}>
                {api}
            </div>

        </>
    )
}