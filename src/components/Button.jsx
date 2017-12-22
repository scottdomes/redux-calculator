import React from 'react'

export default ({ children, className }) => {
    return <button className={`${className} Button`}>{children}</button>
}