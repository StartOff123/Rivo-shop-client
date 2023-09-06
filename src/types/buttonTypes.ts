import React from 'react'

export interface IButton {
    type: string,
    content: string,
    icon?: React.ReactNode
    className: string
}