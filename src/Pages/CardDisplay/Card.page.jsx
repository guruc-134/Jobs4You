import React, {useEffect,useState,useRef} from 'react'
import { useLocation } from 'react-router-dom'
import parse from 'html-react-parser';
import './CardPage.styles.css'
function CardPage(props) {
    const url =  useLocation()
    const [job,setJob] = useState()
    const fetchData = () =>{
        const jobId = url.pathname.split('-')[1]
        console.log(jobId)
         // fetching from the the REST API
        // axios.get('https://remotive.io/api/remote-jobs')
        // .then(resp=> {
        //     console.log(resp.data.jobs.splice(0,30))
        //     localStorage.setItem("jobs",JSON.stringify(resp.data.jobs.splice(0,200)))
        //     setJobs(resp.data.jobs)
        // })
        
        // ---------------------------------------------------------------
        //  to avoid overusing the API, the jobs have been stored to the localStorage of the browser
        //  to enable smooth developing and testing 
        var data = localStorage.getItem("jobs")
        const jobsList = JSON.parse(data)
        jobsList.forEach(job=>{
            console.log(jobId,job.id)
            if (job.id == jobId)
            {
                console.log('match found')
                setJob(job);
            }
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className='cardPage'>
            {job?
                <h1>
                    {job.company_name} 
                </h1>:null}
        <div className='job_description'>
            {job ?parse(job.description):null}
        </div>
        </div>
    )
}

export default CardPage
