import style from './home.module.css'
const App = (): JSX.Element => {
  return (
    <div className={style.todo}>
      <h1 className={style.title}>Todo List</h1>
    </div>
  )
}

export default App
