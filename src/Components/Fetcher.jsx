import React  from 'react';
import axios from 'axios';

function Fetcher({job,setJobs}) {
    const fetchData = () =>{
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
        setJobs(jobsList)
        // ------------------------------------------------------------------
    }
    return (
        <div>
            This is the Fetcher Component
            <button onClick={fetchData}> Fetch Data</button>
        </div>
    )
}

export default Fetcher
