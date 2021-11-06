import React from 'react'

export const ShowErrorMessage = ({message, className}) => {
    return (
        <span role="alert" className={className}>
            {message}
        </span>
    )
}