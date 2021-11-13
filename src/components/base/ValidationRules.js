export const VRules = () => {
    const mail_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const string_pattern = /^[A-Za-z]+$/
    const number_pattern = /^[0-9]+$/
    const string_with_space_pattern = /^[A-Za-z\s]+$/
    const alpha_num_pattern = /^[A-Za-z0-9]+$/
    const alpha_num_with_space_pattern = /^[A-Za-z0-9\s]+$/

    return ({
        Required: (message="required") => ({value: true, message: message}),
        Email: (message="invalid email") => ({value: mail_pattern, message: message}),
        MaxLength: (message="Too much charachter", length=4) => ({value: length, message: message}),
        MinLength: (message="Not enough character", length=1) => ({value: length, message: message}),
        Min: (message="Too small value", value=1) => ({value: value, message: message}),
        Max: (message="Too large value", value=10) => ({value: value, message:message}),
        String: (message="this field only accepts strings",  with_space=false) => {
            return with_space ? ({
                value: string_with_space_pattern,
                message: message
            }) : ({
                value: string_pattern,
                message: message
            })
        },
        Number: (message="this field only accepts numbers") => ({value: number_pattern, message}),
        AlphaNum:  (message="this field only accepts alphanumeric strings",  with_space=false) => {
            return with_space ? ({
                value: alpha_num_with_space_pattern,
                message: message
            }) : ({
                value: alpha_num_pattern,
                message: message
            })
        },
        Pattern: (pattern, message) => ({value: pattern, message: message})
    })
}