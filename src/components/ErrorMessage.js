const ErrorMessage = ({error, body}) => {
    //console.log(error)
    return (
        <>
            {
                error && body
            }
        </>
    )
}

export default ErrorMessage
