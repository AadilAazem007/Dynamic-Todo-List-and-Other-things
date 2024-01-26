interface BoxProps<T>
{
    content: T
}

const Boxex = <T,>({content}: BoxProps<T>) => {
    return (
        <>
            {content}
        </>
    )
}

export default Boxex