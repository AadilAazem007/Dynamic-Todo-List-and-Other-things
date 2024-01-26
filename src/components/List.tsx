import { useAppSelector } from "../store/store"

const List = () => {
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
                            <tr key={index}>
                                <td>
                                    {person.id}
                                </td>
                                <td>
                                    {person.name}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default List