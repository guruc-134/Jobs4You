import React from 'react'
import {Link} from 'react-router-dom'
import './Card.styles.css'
function Card({jobDetail}) {
    return (
        <div className='card' >
            <div className='moreInfo'>
                <Link 
                  to={
                      {
                          pathname:`/Job-${jobDetail.id}`,
                          params : jobDetail.params
                        }
                    }>
                know more
                </Link>
            </div>
            {jobDetail.company_name}
        </div>
    )
}

export default Card
