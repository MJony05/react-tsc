import { useState, ChangeEvent } from 'react'
import style from './home.module.css'
import { IData } from './interfaces'
import { data } from './constants'
const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>('')

  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }

  const hanleSubmit = (): void => {
    if (!title?.length) return
    setTitle('')
    const newData = {
      id: new Date().getTime(),
      title,
      description: 'Description',
    }
    setArr([...arr, newData])
  }
  const deleteItem = (id: number): void => {
    const newArr = arr.filter((item) => item.id !== id)
    setArr(newArr)
  }
  return (
    <div className={style.todo}>
      <h1 className={style.title}>Todo List</h1>
      <div className={style.box}>
        <input
          className={style.input}
          value={title}
          onChange={changeHandler}
          placeholder="Enter todo"
          type="text"
        />
        <button className={style.button} onClick={hanleSubmit}>
          Add Todo
        </button>
      </div>
      <div className={style.card}>
        {arr.map((item) => (
          <div key={item.id} className={style.cardItem}>
            <p className={style.cardTitle}>{item.title}</p>
            <div>
              <button
                onClick={() => deleteItem(item.id)}
                className={style.delButton}
              >
                Del
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
