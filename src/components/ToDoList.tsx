import { ChangeEvent, useState } from "react"
import ToDoType from "./ToDoType"

type TodoItemType = {
    title: string,
    isComponent: boolean,
    id:string
}

const ToDoList = () => {
    const [todos, setToDos] = useState<TodoItemType[]>([])
    const [title, setTitle] = useState<TodoItemType['title']>('')

    const formHandle = (e:SubmitEvent) => {
        e.preventDefault()
        const newTodo: TodoItemType = {
            title: title,
            isComponent: false,
            id: String(Math.random()*100)
        }
        setToDos((preVal) => [...preVal, newTodo])
        setTitle("")
    }

    const deleteHandler = (id:TodoItemType['id']):void => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setToDos(updatedTodos);
    }

    const completeHandler = (id:TodoItemType['id']):void => {
        const thatToDo = todos.map((i) => {
            if(i.id === id) i.isComponent = !i.isComponent
            return i
        })
        setToDos(thatToDo);
    }

    const updateHandler = (id:TodoItemType['id'], newTitle: TodoItemType['title']):void => {
        const thatToDo = todos.map((i) => {
            if(i.id === id) i.title = newTitle
            return i
        })
        setToDos(thatToDo);
    }



    return (
        <>
        <form onSubmit={formHandle}>
            <input type="text" name="title" value={title} placeholder="type here" 
            onChange={(e)=> setTitle(e.target.value)} onKeyDown={(e)=> {if(e.key==="Enter") formHandle }}/>
            <button >Click</button>
        </form>
        {
            todos.map((i, index)=>{
                return (
                    <ToDoType key={index} todo={i} deleteHandler={deleteHandler} completeHandler={completeHandler} updateHandler={updateHandler}></ToDoType>
                )
            })
        }
        
        </>
    )
}

export default ToDoList