import React from 'react'

const Footer = () => {
    return (
        <div className='footer-div'>
            <span className='footer'>Copyright © 2022 Fantom Blog, Inc. All rights reserved.</span>

            <style jsx>
                {`
                    .footer-div{
                        width: 100%;
                        background-color: black;
                        color:white;
                        text-align:center;
                        padding: 20px 0px;
                    }

                    .footer{
                        font-size: 18px;
                        margin:10px;
                    }
                `}
            </style>
        </div>
    )
}

export default Footer