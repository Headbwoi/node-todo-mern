import NewTodoButton from "./NewTodoButton"
import "./todo.css"
type TodoForm = {
  handleNewTodoModal?: () => void
}
const TodoForm = ({ handleNewTodoModal }: TodoForm) => {
  return (
    <>
      <form className="todo-form">
        <header className="flex items-center justify-between">
          <p className="text-xl mb-8 text-gray-300 font-bold uppercase ">
            enter todo{" "}
          </p>
          <img
            src="/close.svg"
            alt="close icon"
            className="w-5 h-5 cursor-pointer"
            onClick={handleNewTodoModal}
          />
        </header>
        <div className="w-full flex flex-col space-y-7">
          <div className="todo">
            <input
              type="text"
              name="title"
              id=""
              className="todo-input"
              placeholder="todo title"
              required
            />
          </div>
          <div className="todo">
            <textarea
              name="todo"
              id=""
              className="todo-input bg-inherit min-h-16 py-5"
              placeholder="todo body"
            />
          </div>
          <div>
            <NewTodoButton content="Create Todo" />
          </div>
        </div>
      </form>
    </>
  )
}

export default TodoForm
