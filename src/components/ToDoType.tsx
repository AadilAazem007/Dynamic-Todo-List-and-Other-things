import { useState } from "react"

type TodoItemType = {
    title: string,
    isComponent: boolean,
    id:string
}
type PropsType = {
    todo: TodoItemType,
    deleteHandler: (id: TodoItemType['id']) => void,
    completeHandler: (id: TodoItemType['id']) => void,
    updateHandler: (id: TodoItemType['id'], newTitle: TodoItemType['title']) => void,
}

const ToDoType = ({todo, deleteHandler, completeHandler, updateHandler}:PropsType) => {
    const [editActive, setEditActive] = useState<boolean>(false)
    const[editText, setEditText] = useState<string>(todo.title)

    return (
        <p>
            {
                editActive ? <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} 
                onKeyDown={(e)=> {if(e.key==="Enter" && editText !== "") {
                    updateHandler(todo.id, editText)
                    setEditActive(false)
                }}}/> 
                : <h2>Title :- {todo.title}</h2>
            }
            
            <h3>Id :- {todo.id}</h3>
            <button onClick={()=>deleteHandler(todo.id)}>Delete</button>
            <button onClick={()=> {setEditActive( editActive => !editActive ); updateHandler(todo.id, editText);}}>
                {
                    editActive ? "Done" : "Edit"
                }
                </button>
            <input type="checkbox" onClick={()=>completeHandler(todo.id)} />
        </p>
    )
}

export default ToDoType