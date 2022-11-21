type TodoList = {
  id: string
  title: string
  todo: string
}

const TodoList = ({ id, title, todo }: TodoList) => {
  return (
    <div
      id={id}
      className="w-full min-h-[7rem] bg-gray-700 text-gray-400 rounded-md duration-300 cursor-pointer relative"
    >
      <div className="px-5 py-3 max-w-[75%]">
        {/* title */}
        <div className="flex flex-wrap items-start">
          <p className="text-base lg:text-lg">{title}</p>
        </div>
        {/* todo */}
        <div className="text-lg lg:text-xl break-words break-all">{todo}</div>
        <button className="absolute top-3 right-5 bg-gray-900 text-blue-600 px-3 py-1 rounded-md hover:scale-[103%]">
          Edit
        </button>
        <button className="absolute bottom-3 right-5 text-red-500 bg-gray-800 py-1 px-3 rounded-md hover:scale-[103%]">
          delete
        </button>
      </div>
    </div>
  )
}

export default TodoList
