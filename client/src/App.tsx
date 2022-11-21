import { useEffect, useState } from "react"
import NewTodoButton from "./components/NewTodoButton"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [openTodoModal, setOpenTodoModal] = useState(false)
  const [todoList, setTodoList] = useState<[] | undefined>()

  const handleNewTodoModal = () => {
    setOpenTodoModal((prev) => !prev)
  }
  const getData = async () => {
    const data = await fetch("http://localhost:3000/todos")
    const res = await data.json()
    setTodoList(res)
  }
  const uploadData = async (bodyData: {}) => {
    try {
      const data = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(bodyData),
      })
      getData()
      return data.json()
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    return () => {
      getData()
    }
  }, [])

  const handleEdit = () => {}

  const handleDelete = async (id: string) => {
    console.log(id)
    const data = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
    getData()
    return data.json()
  }

  return (
    <div className="container w-full">
      <header className="w-fit mx-auto py-10 mb-14 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-300 font-bold uppercase">
          Todo App
        </h1>
      </header>
      {/* todo list */}
      <div className="todos max-w-xl w-full p-6 mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl text-gray-300">Todos</h2>
          <NewTodoButton
            content="New Todo"
            handleNewTodoModal={handleNewTodoModal}
          />
        </div>
        {/* todo items list */}
        <div className="w-full h-full  flex flex-col space-y-5 items-center">
          {todoList?.map((item: TodoList, index) => (
            <TodoList
              key={index}
              _id={item._id}
              title={item.title}
              todo={item.todo}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      {openTodoModal && (
        <TodoForm
          handleNewTodoModal={handleNewTodoModal}
          setOpenTodoModal={setOpenTodoModal}
          uploadData={uploadData}
        />
      )}
    </div>
  )
}

export default App
