import { useContext } from "react"
import { ThemeContext } from "../App"
const Box = () => {
    const { theme, themeToggle } = useContext(ThemeContext)
    return (
        
        <>
        <div className="boxContainer" style={{
            backgroundColor: theme==="dark" ? "rgb(40,40,40)" : "white",
            color: theme==="dark" ? "white" : "rgb(40,40,40)",
            fontSize: theme==="dark" ? "30px" : "15px"
        }}>
            Box 1
            <button onClick={themeToggle}>Change Theme</button>
        </div>
        </>
    )
}

export default Box