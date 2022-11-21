import { FormEvent, useRef } from "react"
import NewTodoButton from "./NewTodoButton"
import "./todo.css"
type TodoForm = {
  handleNewTodoModal?: () => void
  setOpenTodoModal: React.Dispatch<React.SetStateAction<boolean>>
  uploadData: (bodyData: {}) => Promise<any>
}
const TodoForm = ({
  handleNewTodoModal,
  setOpenTodoModal,
  uploadData,
}: TodoForm) => {
  const titleRef = useRef<HTMLInputElement>(null)
  const todoRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    let bodyData: {} = {
      title: titleRef.current?.value,
      todo: todoRef.current?.value,
    }

    uploadData(bodyData)
    setOpenTodoModal(false)
  }
  return (
    <>
      <form
        className="todo-form fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900 py-10 rounded-md"
        onSubmit={handleSubmit}
      >
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
              className="todo-input"
              placeholder="todo title"
              ref={titleRef}
              required
            />
          </div>
          <div className="todo">
            <textarea
              name="todo"
              className="todo-input bg-inherit min-h-16 py-5"
              placeholder="todo body"
              //@ts-ignore
              ref={todoRef}
              required
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
