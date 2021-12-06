import React , {useState}from 'react'
import Card from '../../Components/Card/Card.component'
import Fetcher from '../../Components/Fetcher'

function Search() {
    const [jobs,setJobs] = useState([])
    return (
        <div>
            This is the search page
            <Fetcher jobs ={jobs} setJobs = {setJobs}/>
            {
                jobs[0] ?
                jobs.map(jobDetail =>
                    {
                        console.log('here are the jobs',jobDetail);
                    return(
                        <Card jobDetail={jobDetail} key={jobDetail.id}/>
                        )
                }) : null
            }
        </div>
    )
}

export default Search
