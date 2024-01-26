import { useRef } from "react"
import { useAppDispatch } from "../store/store1"
import { addPerson } from "../store/features/personSlice1"
const AddUser = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch()
    const submitForm = (e:SubmitEvent) => {
        e.preventDefault()
        dispatch(
            addPerson({name:name.current})
        )
    }

    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" onChange={(e)=>name.current=e.target.value}/>
            <button onClick={submitForm}>Click Me</button>
        </form>
    )
}

export default AddUser