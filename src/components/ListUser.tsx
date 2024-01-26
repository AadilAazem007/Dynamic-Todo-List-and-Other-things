import { useAppSelector } from "../store/store"

const ListUser = () => {
    const persons = useAppSelector(state=>state.person.persons)
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
            </thead>
            <tbody>
                {
                    persons.map((person, index) => {
                        return (
                            <ul key={index}>
                                <li>
                                    {person.id}
                                </li>
                                <li>
                                    {person.name}
                                </li>
                            </ul>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ListUser