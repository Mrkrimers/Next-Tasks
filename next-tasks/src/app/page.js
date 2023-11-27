import Link from "next/link"
import style from './page.module.css'

const tasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10']

export default function Home() {
  return (
    <>
      <h1>HellOY</h1>

      <div className={style.wrapper}>
        <ul>
          {tasks.map((el, i) => <Link href={`/${el}`} key={i}><li>{el}</li></Link>)}
        </ul>
      </div>
    </>
  )
}
