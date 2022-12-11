import { useEffect, useState } from "react"
import NewTodoButton from "./components/NewTodoButton"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

export const initialFormStates = { _id: "", title: "", todo: "" }
function App() {
  const [openTodoModal, setOpenTodoModal] = useState(false)
  const [todoList, setTodoList] = useState<[] | undefined>()
  const [isEditing, setIsEditing] = useState<Boolean>(false)
  const [todoValues, setTodoValues] = useState(initialFormStates)
  const handleNewTodoModal = () => {
    setOpenTodoModal((prev) => !prev)
    setIsEditing(false)
    setTodoValues(initialFormStates)
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
    getData()
  }, [])

  const handleEdit = async (id: string, payload: {}) => {
    try {
      const data = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      getData()
      return data.json()
    } catch (error) {
      console.error(error)
    }
  }
  const handleDelete = async (id: string) => {
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
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setIsEditing={setIsEditing}
              todoValues={todoValues}
              setTodoValues={setTodoValues}
              setOpenTodoModal={setOpenTodoModal}
            />
          ))}
        </div>
      </div>

      {openTodoModal || isEditing ? (
        <TodoForm
          handleNewTodoModal={handleNewTodoModal}
          setOpenTodoModal={setOpenTodoModal}
          uploadData={uploadData}
          handleEdit={handleEdit}
          todoValues={todoValues}
          setTodoValues={setTodoValues}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default App
