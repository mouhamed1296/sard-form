import React from 'react'

const GenerateLabel = ({labelProps, children, fieldId}) => {
    let label = null

    if (labelProps.content || labelProps.className || labelProps.style) {
        label = <label htmlFor={fieldId} className={labelProps.className} style={labelProps.style}>
            {labelProps.content}
            {children}
        </label>
    } else {
        label = <label htmlFor={fieldId}>
            {labelProps}
            {children}
        </label>
    }

    return (
        {label}
    )
}

export default GenerateLabel
