import React from 'react'
import { _Object } from '../Object'

export const ShowErrorMessage = ({message, className, style, wrap={}}) => {
    const Wrapper = `${wrap.in}`
    return (
        _Object.isEmpty(wrap)
        ? <span role="alert" className={className}>
            {message}
        </span>
        : <Wrapper className={wrap.className} style={wrap.style}>
            <span role="alert" className={className} style={style}>
                {message}
            </span>
            <>
             {wrap.children}
            </>
        </Wrapper>
    )
}