import { useState } from "react"
import NewTodoButton from "./components/NewTodoButton"
import TodoForm from "./components/TodoForm"

function App() {
  const [openTodoModal, setOpenTodoModal] = useState(false)
  const handleNewTodoModal = () => {
    setOpenTodoModal((prev) => !prev)
  }
  return (
    <div className="container w-full ">
      <header className="w-full mb-14 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-300 font-bold uppercase">
          Todo App
        </h1>
      </header>
      {/* todo list */}
      <div className="todos max-w-xl w-full px-6 mx-auto">
        <div className="flex items-center justify-between ">
          <div className="text-xl text-gray-300">Todos</div>
          <NewTodoButton
            content="New Todo"
            handleNewTodoModal={handleNewTodoModal}
          />
        </div>
        {/* todo items list */}
      </div>

      {openTodoModal && <TodoForm handleNewTodoModal={handleNewTodoModal} />}
    </div>
  )
}

export default App
