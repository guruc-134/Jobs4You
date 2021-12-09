import React from 'react'
import './Footer.style.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer_1'>
            <p>feel free to contact us - Jobs4.you@gmail.com</p>
                <p>Built By - <a href='https://github.com/guruc-134/'>Guru Charan</a></p>
            </div>
            <div className='footer_2'>
                <p>
                    Information displayed in this website is taken from the  <a href='https://remotive.io/api/remote-jobs'> API</a>.
                </p>
                <p>Images used for companies and logos are for the sole purpose of <b>
                    illustration only</b>
                </p>
                <p>contact address provided is also imaginary
                </p>
            </div>
        </div>
    )
}

export default Footer
