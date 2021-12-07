import React , {useState,useEffect}  from 'react';
import {unstable_batchedUpdates} from 'react-dom'
import stringSimilarity from 'string-similarity'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Fetcher.style.css'
function Fetcher({job,setJobs}) {
    const [job_title,setJobTitle] = useState('')
    const [job_type,setJobType] = useState('')
    const [job_category,setJobCategory] = useState('')

    const fetchData = (job_title,job_category,job_type) =>
    {
        // fetching from the the REST API
        // axios.get('https://remotive.io/api/remote-jobs')
        // .then(resp=> {
        //     console.log(resp.data.jobs.splice(0,1000))
        //     localStorage.setItem("jobs",JSON.stringify(resp.data.jobs.splice(0,1000)))
        //     setJobs(resp.data.jobs)
        // })
        
        // ---------------------------------------------------------------
        //  to avoid overusing the API, the jobs have been stored to the localStorage of the browser
        //  to enable smooth developing and testing 
        var data = localStorage.getItem("jobs")
        const jobsList = JSON.parse(data)
        var filteredData = jobsList.filter(item =>{
            var c1 = 
            (stringSimilarity.compareTwoStrings(item.title.toLowerCase(),job_title.toLowerCase() ) >= 0.5 ) || (item.title.toLowerCase().includes(job_title.toLowerCase()))
            if (c1)
            console.log(item.title,job_title, stringSimilarity.compareTwoStrings(item.title,job_title ) )
            if(job_title.length == 0) c1 = true

            var c2 = item.category == job_category;
            if (job_category == 'All' || job_category == "") c2 = true
            
            var c3 = item.job_type == job_type
            if (job_type == 'All' || job_type == "") c3 = true
            console.log(c1,c2,c3)
            return (c1 & c2 & c3)
        })
        console.log(filteredData)
        setJobs(filteredData)
        // ------------------------------------------------
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        unstable_batchedUpdates(() => {
            setJobTitle('')
            setJobCategory('All')
            setJobType('All')
        })
 
        console.log(job_title,job_category,job_type)
        fetchData(job_title,job_category,job_type)
    }
    const handleType = (e) =>{
        const {label,value} = e
        setJobType(value)
    }
    const handleCategory = (e) =>{
        const {label,value} = e
        setJobCategory(value)
    }
    const handleInput = (e) =>{
        const query = e.target.value
        e.target.value= ""
        setJobTitle(query)
    }
    const Category_options = 
    [
        "All","Human Resources","Data","Customer Service","QA","Marketing","Finance / Legal","Sales","Writing","Business","Product","Design","Software Development","All others","DevOps / Sysadmin",
    ];
    const Type_options = 
    [
        'All','full_time', 'contract', 'part_time', 'other', 'freelance'
    ];

    useEffect(()=>{
        // fetchData()
    },[])
    return (
        <div className='fetcher'>
            <form className='fetcher_form'>
                {/* search by title */}
                <div className='search-box'>
                    <input className='form_input' 
                        type='text' 
                        value = {job_title}
                        onChange = {handleInput}
                        // value = {job_title_query}
                        placeholder='Search By Job Title'>
                    </input>
                <button
                    className='form_btn'
                    onClick={handleSubmit}>
                        <i class="fas fa-search"></i>
                </button>
                </div>
                {/* search by category */}
                <div className='options'>
                <Dropdown 
                    name = 'category'
                    className='dropdown'
                    options={Category_options}
                    onChange={handleCategory}
                    value={job_category} 
                    placeholder="category" />;
                {/* search by job type */}
                <Dropdown
                    options={Type_options}
                    name = 'type'
                    className='dropdown'
                    onChange={handleType}
                    value={job_type} 
                    placeholder="type" />;
             
                </div>

            </form>
        </div>
    )
}

export default Fetcher
