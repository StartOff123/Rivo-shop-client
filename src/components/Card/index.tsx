import React from 'react'
import { ICardProps } from '../../types/cardtTypes'

import '../../styles/card.scss'
import { randomBgCardColor } from '../../utils/randomBgCardColor'

const Card: React.FC<ICardProps> = ({ title, img, bg, price, reting }) => {
    return (
        <div className='card'>
            <div className='card__img' style={!bg ? { backgroundColor: randomBgCardColor() } : {}}>
                <img src={img} alt="cardImg" />
            </div>
            <div className='card__content'>
                <h6>{title}</h6>
                <div className='card__content_bottom'>
                    <span>$ {price}</span>
                    <span>
                        {reting}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_120)">
                                <path d="M19.4672 23.3152L12.0002 17.8272L4.53323 23.3152L7.40023 14.4522L-0.0627747 8.99922H9.15123L12.0002 0.121216L14.8492 8.99922H24.0622L16.6002 14.4522L19.4672 23.3152Z" fill="#F5D426" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_120">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card