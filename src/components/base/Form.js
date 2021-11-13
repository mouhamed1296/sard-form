import React from "react"
const Form = ({method, action, className, onSubmit, onReset, encType, children, id, onInput}) => {
    return (
        <form
            method={method}
            action={action}
            className={className}
            onSubmit={onSubmit}
            onReset={onReset}
            encType={encType}
            id={id}
            onInput={onInput}
        >
            {children}
        </form>
    )
}

export default Form