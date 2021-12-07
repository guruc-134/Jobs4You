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
            <p>
                {jobDetail.job_type}
            </p>
            <p>
                {jobDetail.category}
            </p>
            <p>
                {jobDetail.id}
            </p>
            <p>
                {jobDetail.title}
            </p>
        </div>
    )
}

export default Card
