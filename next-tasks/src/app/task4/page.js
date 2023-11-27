const form = ['New York', 'London', 'Tokyo', 'Paris', 'Berlin']

export default function Task4() {

    return (
        <>
            <p>
                4. Создайте массив данных, представляющий элементы, которые вы хотите
                отобразить в списке используя map New York, London, Tokyo, Paris, Berlin
            </p>

            <div>
                {form.map((el, i) => <p key={i}>{el}</p>)}
            </div>

        </>
    )
}