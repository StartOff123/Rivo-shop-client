import React from 'react'
import classNames from 'classnames'
import { IButtonProps } from '../../types/buttonTypes'

import '../../styles/button.scss'

const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({ className, type, icon, children}) => {
    return (
        <button className={
            classNames(
                'btn',
                type === 'primory' ? 'btn-primory' : 'btn-default',
                className ? className : ''
            )}
        >
            <div>{children}</div>
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default Button