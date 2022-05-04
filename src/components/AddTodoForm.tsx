import React, {useState} from "react";


interface Props {
  addTodo: AddTodo
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('')
  const handleAddTodo = (e: any) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }
  return(
    <form onSubmit={(e)=> handleAddTodo(e)}>
      <input type="text" value={text} id=""
        onChange = {(e)=>setText(e.target.value)}
      />
      <button type= "submit"> Add Todo </button>
    </form>
    )
}
