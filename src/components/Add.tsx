import { useRef } from "react"
import { useAppDispatch } from "../store/store"
import { addPerson } from "../store/features/personSlice"

const Add = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch()
    const addPersonFunc = (e:SubmitEvent):void => {
        e.preventDefault()
        dispatch(
            addPerson({name: name.current}
                )
        )
    }
    return (
        <form>
            <label htmlFor="">Person Name</label>
            <input type="text" placeholder="Name" onChange={e=>name.current=e.target.value}/>
            <button onClick={addPersonFunc}>
                Add</button>
        </form>
    )
}

export default Add