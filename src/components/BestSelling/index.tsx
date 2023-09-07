import React from 'react'
import { ICardProps } from '../../types/cardtTypes'
import { Card } from '..'

import '../../styles/bestSelling.scss'

const BestSelling: React.FC = () => {
    const cardArr: ICardProps[] = [
        {
            id: 1,
            title: 'Regular Fit Long Sleeve Top',
            price: 38.99,
            reting: 5.0,
            img: require('../../assets/img/pexels-dima-valkov-6211621 1.png'),
            bg: false
        },
        {
            id: 2,
            title: 'Black Crop Tailored Jacket',
            price: 62.99,
            reting: 4.9,
            img: require('../../assets/img/pexels-dima-valkov-6211616 (1) 2.png'),
            bg: false
        },
        {
            id: 3,
            title: 'Textured Sunset Shirt',
            price: 49.99,
            reting: 5.0,
            img: require('../../assets/img/pexels-dima-valkov-6503007 3.png'),
            bg: false
        },
    ]

    return (
        <div className='bestSelling'>
            <div className='container'>
                <div className='bestSelling__inner'>
                    <div className='bestSelling__title'>
                        <h2 className='block-title'>Best selling</h2>
                        <p className='block-description'>Get in on the trend with our curated selection of best-selling styles.</p>
                    </div>
                    <div className='bestSelling__cards'>
                        {
                            cardArr.map(item => (
                                <Card key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling