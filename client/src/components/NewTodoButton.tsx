type Button = {
  handleNewTodoModal?: () => void
  content: string
}
const NewTodoButton = ({ handleNewTodoModal, content }: Button) => {
  return (
    <>
      <button
        className="h-10 w-28 grid place-items-center bg-gray-700 text-gray-400 hover:bg-gray-800 hover:text-gray-50 rounded-md hover:border hover:border-gray-300 duration-300"
        onClick={handleNewTodoModal}
      >
        {content}
      </button>
    </>
  )
}

export default NewTodoButton
