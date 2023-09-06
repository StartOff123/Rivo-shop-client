import React from 'react'
import classNames from 'classnames'
import { IButton } from '../../types/buttonTypes'

const Button: React.FC<IButton> = ({ className, content, type, icon }) => {
    return (
        <button className={
            classNames(
                'btn',
                type === 'primory' ? 'btn-primory' : 'btn-default',
                className ? className : ''
            )}
        >
            <div>{content}</div>
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default Button