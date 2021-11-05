export const VRules = () => {
    const mail_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const string_pattern = /^[A-Za-z]+$/
    const number_pattern = /^[0-9]+$/
    const string_with_space_pattern = /^[A-Za-z\s]+$/

    return ({
        Required: (m="required") => ({value: true, message: m}),
        Email: (m="invalid email", p=mail_pattern) => ({value: p, message: m}),
        MaxLength: (m="Too much charachter", l=4) => ({value: l, message: m}),
        MinLength: (m="Not enough character", l=1) => ({value: l, message: m}),
        Min: (m="Too small value", v=1) => ({value: v, message: m}),
        Max: (m="Too large value", v=10) => ({value: v, message:m}),
        String: (m="this field only accepts strings",  with_space=false, p=string_pattern) => {
            if (with_space) {
                p = string_with_space_pattern
            }
            return ({
                value: p,
                message: m
            })
        },
        Number: (m="this field only accepts numbers", p=number_pattern) => ({value: p, m})
    })
}