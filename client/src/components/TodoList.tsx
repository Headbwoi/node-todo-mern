import { useRef } from "react"

type TodoList = {
  _id: string
  title: string
  todo: string
  handleDelete: (id: string) => void
  handleEdit: (id: string, payload: {}) => Promise<void>
  setIsEditing: React.Dispatch<React.SetStateAction<Boolean>>
  todoValues: {
    _id: string
    title: string
    todo: string
  }
  setTodoValues: React.Dispatch<
    React.SetStateAction<{
      _id: string
      title: string
      todo: string
    }>
  >
  setOpenTodoModal: React.Dispatch<React.SetStateAction<boolean>>
}

const TodoList = ({
  _id,
  title,
  todo,
  handleDelete,
  setIsEditing,
  setTodoValues,
  setOpenTodoModal,
}: TodoList) => {
  const todoEditRef = useRef<HTMLDivElement>(null)

  const handleUpdating = (title: string, todo: string, _id: string) => {
    const nextFormState = {
      _id: _id,
      title: title,
      todo: todo,
    }
    setTodoValues(nextFormState)
    setIsEditing(true)
    setOpenTodoModal((prev) => !prev)
  }

  return (
    <div
      id={_id}
      className="w-full min-h-[7rem] bg-gray-700 text-gray-400 rounded-md duration-300 cursor-pointer relative"
    >
      <div className="px-5 py-3 max-w-[75%]">
        {/* title */}
        <div className="flex flex-wrap items-start">
          <p className="text-base lg:text-lg">{title}</p>
        </div>
        {/* todo */}
        <div
          className="text-lg lg:text-xl break-words break-all"
          ref={todoEditRef}
        >
          {todo}
        </div>
        <button
          className="absolute top-3 right-5 bg-gray-900 text-blue-600 px-3 py-1 rounded-md hover:scale-[103%]"
          onClick={() => handleUpdating(title, todo, _id)}
        >
          Edit
        </button>
        <button
          className="absolute bottom-3 right-5 text-red-500 bg-gray-800 py-1 px-3 rounded-md hover:scale-[103%]"
          onClick={() => handleDelete(_id)}
        >
          delete
        </button>
      </div>
    </div>
  )
}

export default TodoList
