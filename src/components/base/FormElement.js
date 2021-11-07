import React from 'react'
import ErrorMessage from '../ErrorMessage'

const FormElement = React.forwardRef((props, ref) => {
    const fieldProps = Object.fromEntries(Object.entries(props).filter(prop => {
        return prop[0] !== "wrap" && prop[0] !== "label"
    }))
    const inputTypes = [
        "text",
        "submit",
        "email",
        "password",
        "week",
        "month",
        "date",
        "search",
        "url",
        "datetime",
        "datetime-local",
        "radio",
        "range",
        "checkbox",
        "file",
        "hidden"
    ]
    const labelProps = props.label
    /*Object.fromEntries(Object.entries(props).filter(prop => (prop[0].startsWith('label'))))*/
    const wrapperProps = props.wrap

    let inputClasses = fieldProps.className
    let invalid = false
    let errorMessage
    if (fieldProps.onError) {
        if (fieldProps.onError[0] !== undefined) {
            invalid = true
            errorMessage = <ErrorMessage
            error={fieldProps.onError[0]}
            body={fieldProps.onError[1]}
            />
        }
    }
    let formElement = <input 
        type={fieldProps.type} 
        name={fieldProps.name}
        placeholder={fieldProps.placeholder}
        id={fieldProps.id}
        className={inputClasses}
        value={fieldProps.value}
        autoComplete={fieldProps.autoComplete}
        onChange={fieldProps.onChange}
        checked={fieldProps.checked}
        onFocus={fieldProps.onFocus}
        onBlur={fieldProps.onBlur}
        onKeyDown={fieldProps.onKeyDown}
        onKeyUp={fieldProps.onKeyUp}
        aria-invalid={invalid}
        ref={ref}
    />
    let label = null

    if (fieldProps.type === "select") {
        let Options = []
        fieldProps.options.forEach((option, index) => {
            Options.push(<option key={index} value={option.toLowerCase()}>{option.toUpperCase()}</option>)
        });
        formElement = <select
            name={fieldProps.name}
            id={fieldProps.id}
            className={inputClasses}
            style={fieldProps.style}
            onChange={fieldProps.onChange}
            aria-invalid={invalid}
            ref={ref}
        >
            {Options}
        </select>
    } else if (fieldProps.type === "textarea") {
        formElement = <textarea 
            id={fieldProps.id} 
            className={inputClasses}
            name={fieldProps.name} 
            value={fieldProps.value}
            autoFocus={fieldProps.autoFocus}
            autoComplete={fieldProps.autoComplete}
            onChange={fieldProps.onChange}
            onFocus={fieldProps.onFocus}
            onBlur={fieldProps.onBlur}
            rows={fieldProps.rows}
            cols={fieldProps.cols}
            aria-invalid={invalid}
            placeholder={fieldProps.placeholder}
            ref={ref}
        >
        </textarea>
    } else if (fieldProps.type === "button") {
        formElement = <button
            type={fieldProps.btype}
            id={fieldProps.id}
            name={fieldProps.name}
            onClick={fieldProps.onClick}
            style={fieldProps.style}
            className={fieldProps.className}
            ref={ref}
        >
            {fieldProps.children}
        </button>
    } else if (!inputTypes.includes(fieldProps.type)){
        formElement = <input placeholder="invalid input type" style={{color: "red"}} disabled />
    }
    //console.log(props.label)
    if (fieldProps.id && labelProps) {
        if (labelProps === "" || typeof labelProps === "boolean" || typeof labelProps === "string") {
            <label htmlFor={fieldProps.id}>
                {labelProps}
            </label>
        }
        label = <label htmlFor={fieldProps.id} className={labelProps.className} style={labelProps.style}>
            {labelProps.content}
        </label>
    }

    if(wrapperProps) {
        if(wrapperProps.in === "label") {
            return (
                <label className={labelProps.className}>
                    {labelProps.content}
                    {formElement}
                    {errorMessage}
                </label>
            )
        }
        if(wrapperProps.in ==="div>label") {
            return (
                <div className={wrapperProps.className} style={wrapperProps.style}>
                    <label className={labelProps.className}>
                        {labelProps.content}
                        {formElement}
                        {errorMessage}
                    </label>
                </div>
            )
        }
        if (labelProps.position === "afterInput") {
            return (

                (wrapperProps.in === "div" || "") && <div className={wrapperProps.className} style={wrapperProps.style}>
                    {formElement}
                    {label}
                    {errorMessage}
                </div>
            )
        }
        return (

            (wrapperProps.in === "div" || "") && <div className={wrapperProps.className} style={wrapperProps.style}>
                {label}
                {formElement}
                {errorMessage}
            </div>
        )
    }

    return (
        <>
            {label}
            {formElement}
            {errorMessage}
        </>
    )
})

export default FormElement