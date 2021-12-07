import React from 'react'
import {Link} from 'react-router-dom'

import './Card.styles.css'
function Card({jobDetail}) {
    var rightNow = new Date(jobDetail.publication_date);  
    var PostedDate = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
    return (
        <div className='card' >
            <Link 
                    className='moreInfo_link'
                to={{
                    pathname:`/Job-${jobDetail.id}`,
                    params : jobDetail.params}}>
            <div className='moreInfo'>

                <h3 className='job_company'>
                    {jobDetail.company_name}
                </h3>
                <h4 className='job_header'>
                    {jobDetail.title} 
                </h4>
                <p> <b>Job Category: </b>{jobDetail.category}</p>
                <p><b>Job Id - </b>{jobDetail.id} </p>
                <p><b>Eligible Location: </b>{jobDetail.candidate_required_location}</p>
                <p>This is a { jobDetail.job_type ? jobDetail.job_type: 'normal'} role</p>
                <p>This Job was Posted on: {PostedDate}</p>
            </div>
            </Link>

          
            
            <p className='jobDetail_url'>
                {jobDetail.url ?
                <a href={jobDetail.url}> Visit Site </a>
                :null}
                🌐
            </p>
        </div>
    )
}

export default Card
