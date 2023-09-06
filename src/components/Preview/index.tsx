import React from 'react'

import '../../styles/preview.scss'

const Preview: React.FC = () => {
    return (
        <div className='preview'>
            <div className='container'>
                <div className='preview__inner'>
                    <div className='preview__right'>
                        <h1>Discover and Find Your Own Fashion!</h1>
                        <p>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                        <button className='btn'>Explore Now</button>
                    </div>
                    <div className='preview__left'>
                        <div className='preview__left_img'>
                            {Array(2).fill(1).map((_, i) =>
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="119" height="110" viewBox="0 0 119 110" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#267144" />
                                    <circle cx="4" cy="38" r="4" fill="#267144" />
                                    <circle cx="4" cy="72" r="4" fill="#267144" />
                                    <circle cx="4" cy="106" r="4" fill="#267144" />
                                    <circle cx="41" cy="4" r="4" fill="#267144" />
                                    <circle cx="41" cy="38" r="4" fill="#267144" />
                                    <circle cx="41" cy="72" r="4" fill="#267144" />
                                    <circle cx="41" cy="106" r="4" fill="#267144" />
                                    <circle cx="78" cy="4" r="4" fill="#267144" />
                                    <circle cx="78" cy="38" r="4" fill="#267144" />
                                    <circle cx="78" cy="72" r="4" fill="#267144" />
                                    <circle cx="78" cy="106" r="4" fill="#267144" />
                                    <circle cx="115" cy="4" r="4" fill="#267144" />
                                    <circle cx="115" cy="38" r="4" fill="#267144" />
                                    <circle cx="115" cy="72" r="4" fill="#267144" />
                                    <circle cx="115" cy="106" r="4" fill="#267144" />
                                </svg>
                            )}
                            <img src={require('../../assets/img/preview.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview