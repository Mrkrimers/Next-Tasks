import Ip from './ip'
import style from './style.module.css'


export default function Task9() {

    return (
        <>
            <p>
                9. Создайте компонент, который выполняет запрос к API
                https://api.ipify.org/?format=json и отображает полученные данные в заголовок.
                (решить задачу через серверный компонент)
            </p>

            <div className={style.wrapper}>
                <Ip />
            </div>

        </>
    )
}