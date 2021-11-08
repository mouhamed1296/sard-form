import React from 'react'

const GenerateLabel = ({labelProps, children}) => {
    let label = null

    if (labelProps.content || labelProps.className || labelProps.style) {
        label = <label htmlFor={fieldProps.id} className={labelProps.className} style={labelProps.style}>
            {labelProps.content}
            {children}
        </label>
    } else {
        label = <label htmlFor={fieldProps.id}>
            {labelProps}
            {children}
        </label>
    }

    return (
        {label}
    )
}

export default GenerateLabel
