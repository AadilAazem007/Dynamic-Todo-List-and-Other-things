import { useState } from "react"

interface FormType<T>
{
    name: T,
    email: T
}

interface FormProps<T> {
    onSubmit: (formData: FormType<T>) => void;
  }


const GenericForm = <T,>() => {
    const [formData, setFormData] = useState<FormType<T>>({name:"" as T, email:"" as T})

    const handleChange = (inputType: keyof FormType<T>, value: T) => {
        setFormData({
            ...formData,[inputType]:value
        })
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={e=>handleChange('name', e.target.value as T)}/>
                <input type="text" name="email" placeholder="Email" onChange={e=>handleChange('email', e.target.value as T)}/>
                <button>Submit</button>
            </form>
    )
}

export default GenericForm