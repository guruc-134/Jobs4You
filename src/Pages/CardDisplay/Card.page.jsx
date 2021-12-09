import React, {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser';
import axios from 'axios'
import './CardPage.styles.css'
import Footer from '../../Components/Footer/Footer';

function CardPage(props) {
    const url =  useLocation()
    const [job,setJob] = useState()
    var rightNow , PostedDate
    const fetchData = () =>{
        const jobId = url.pathname.split('-')[1]
        // console.log(jobId)
        //  to avoid overusing the API, the jobs have been stored to the localStorage of the browser
        //  to enable smooth developing and testing 
        var data = localStorage.getItem("jobs")
        var jobsList = JSON.parse(data)
        if(jobsList == null || jobsList.length === 0)
        {
            // fetching from the the REST API
            // console.log('api')
            axios.get('https://remotive.io/api/remote-jobs')
            .then(resp=> {
                localStorage.setItem("jobs",JSON.stringify(resp.data.jobs.splice(0,400)))
                let joblist = resp.data.jobs
                joblist.forEach(job=>{
                    if (job.id == jobId)
                    {
                        console.log('match found')
                        rightNow = new Date(job.publication_date);  
                        PostedDate = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
                        console.log(PostedDate)
                        job.publication_date = PostedDate
                        console.log(job)
                        setJob(job);
                    }
                })
            })
        }
        else{
            jobsList.forEach(job=>{
                if (job.id == jobId)
                {
                    rightNow = new Date(job.publication_date);  
                    PostedDate = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
                    job.publication_date = PostedDate
                    setJob(job);
                }
            })
    }

    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className='cardPage'>
            {job?
    <div className='moreInfo'>  
            <h3 className='jobPage_company'>
                {job.company_name}   
            </h3>
            <h4 className='jobPage_header'>
           { job.job_type ? job.job_type: null } { job.title} 
            </h4>
            <div className='info_tags'>
                <p> <b>Job Category: </b>{job.category}</p>
                <p><b>Job Id - </b>{job.id} </p>
                <p><b>Eligible Location: </b>{job.candidate_required_location}</p>
                <p><b> Posted on: </b>{job.publication_date}</p>
            </div>
                <div className='job_description'>
                    <h2>Job Description</h2>
                    <p className='visit_website'>
                        {job.url ?
                        <a target='_blank_' href={job.url}>  
                        Visit Website - 🌐
                        </a>
                        :null}
                    </p>
                    {job ?parse(job.description):null}
                </div>
        </div>
            :null}
            <Footer/>
            </div>
    )
}

export default CardPage
