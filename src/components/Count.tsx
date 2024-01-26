import { useAppSelector,useAppDispatch } from "../store/store"
import { increment, decrement } from "../store/features/countSlice"

const Count = () => {
    const count = useAppSelector(state=>state.count.count)
    const dispatch = useAppDispatch()

    const incrementVal = () => {
        dispatch(increment({count:1}))
    }

    const decrementVal = () => {
        dispatch(decrement({count:1}))
    }

    return (
        <>
        Count:{count}
            <button onClick={incrementVal}>+</button>
            <button onClick={decrementVal}>-</button>        
        </>
    )
}
export default Count