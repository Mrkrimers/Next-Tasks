import style from './style.module.css'

export default function Task1() {

    const form = ['name', 'surname', 'addres', 'password']

    return (
        <>
            <p>1. Создайте форму для ввода имени, фамилии, адреса электронной почты и пароля</p>

            <div className={style.form}>

                {form.map((el, i) => <div key={i}> <input placeholder={` Enter your ${el}`} /> </div>)}
               
                <div>
                    <button>enter data</button>
                </div>

            </div>

        </>
    )
}