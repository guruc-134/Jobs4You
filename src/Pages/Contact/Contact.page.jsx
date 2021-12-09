import React from 'react'
import './Contact.styles.css'
function Contact() {
    return (
        <div className='contact_page'>
            <div className='contact'>
                <div>
                    <img className='contact_img' alt='contact_img' src={process.env.PUBLIC_URL + '/contactUs.png'} />
                </div>
                <div className='contact_details'>
                    <h1> Contact Us</h1>
                    <h3>Get in touch with the team</h3>
                    <div>
                        <p><b>Email address : </b> guruc134@gmail.com</p>
                        <p><b>LinkedIn :</b> <a target='_blank_' href='https://www.linkedin.com/in/guru-charan-kakaraparty-7103561a1/'> Guru Charan</a></p>
                        <p><b>Company Address</b> Qno:1ab , Xyxy Colony, opposite to XYXY Mall, Visakhapatnam, Andhra Pradesh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
