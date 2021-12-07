import React , {useState,useEffect}  from 'react';
// import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Fetcher.style.css'
function Fetcher({job,setJobs}) {
    const [job_title,setJobTitle] = useState('')
    const [job_type,setJobType] = useState('')
    const [job_category,setJobCategory] = useState('')

    const fetchData = () =>
    {
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
        // ------------------------------------------------
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setJobTitle('')
        console.log(job_title,job_category,job_type)
        fetchData()
    }
    const handleType = (e) =>{
        const {label,value} = e
        console.log(label,value)
        setJobType(value)
    }
    const handleCategory = (e) =>{
        const {label,value} = e
        console.log(label,value)
        setJobCategory(value)
    }
    const handleInput = (e) =>{
        const query = e.target.value
        e.target.value= ""
        setJobTitle(query)
    }
    const Category_options = 
    [
        'one', 'two', 'three'
    ];
    const Type_options = 
    [
        'one', 'two', 'three'
    ];

    useEffect(()=>{
        // fetchData()
    },[])
    return (
        <div className='fetcher'>
            This is the Fetcher Component
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
                <button
                    className='form_btn'
                    onClick={handleSubmit}> Fetch Data
                </button>
                </div>

            </form>
        </div>
    )
}

export default Fetcher
