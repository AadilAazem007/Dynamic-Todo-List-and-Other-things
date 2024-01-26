interface ItemProps<T>
{
    lists: T[],
    renderList: (list:T) => React.ReactNode
}


const ReusableList = <T,>(listProp: ItemProps<T>) => {
    return (

        <ul>
            {
                listProp.lists.map((list, index) => {
                    return (
                        <li key={index}> { listProp.renderList(list) } </li>
                    )
                })
            }
        </ul>
    )
}

export default ReusableList