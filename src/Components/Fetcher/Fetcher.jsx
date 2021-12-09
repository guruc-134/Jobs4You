// import statements -------
import React , {useState}  from 'react';
import stringSimilarity from 'string-similarity'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Fetcher.style.css'

// React functional Component ----------
function Fetcher({job,setJobs}) {
    // state variables -----------
    const [job_title,setJobTitle] = useState('')
    const [job_type,setJobType] = useState('')
    const [job_category,setJobCategory] = useState('')
    const [job_order,setJob_order] = useState('')

    // function to filter the results based on job title, job category, and order --------
    const filterFunc = (jobsList,job_title,job_category,job_type,job_order) =>{ 
        //  filtering the data using the conditions ---------- 
        var filteredData = jobsList.filter(item =>{
            var c1 = 
            (stringSimilarity.compareTwoStrings(item.title.toLowerCase(),job_title.toLowerCase() ) >= 0.5 ) || (item.title.toLowerCase().includes(job_title.toLowerCase()))
            if (c1)
            if(job_title.length === 0) c1 = true

            var c2 = item.category === job_category;
            if (job_category === 'All' || job_category === "") c2 = true
            
            var c3 = item.job_type === job_type
            if (job_type === 'All' || job_type === "") c3 = true
            return (c1 & c2 & c3)
            })
        //  arranging the items based on recency ------------
        var ord = job_order === 'recent' ?1:-1
        filteredData.sort((a,b)=>Date(a.publication_date) > Date(b.publication_date)?-ord:ord)
        return filteredData            
    }
    //  fetching the data..............
    const fetchData = (job_title,job_category,job_type,job_order) =>
    {
        //  to avoid overusing the API, the jobs have been stored to the localStorage of the browser
        //  to enable smooth developing and testing 
        var data = localStorage.getItem("jobs")
        let jobsList = JSON.parse(data)
        if(data === null || data.length === 0)
        {
            // fetching from the the REST API
            axios.get('https://remotive.io/api/remote-jobs')
            .then(resp=> {
                localStorage.setItem("jobs",JSON.stringify(resp.data.jobs.splice(0,400)))
                setJobs(filterFunc(resp.data.jobs,job_title,job_category,job_type,job_order))
            })
        }
        else
        {
            setJobs(filterFunc(jobsList,job_title,job_category,job_type,job_order))
        }  
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetchData(job_title,job_category,job_type,job_order)
    }
    const handleType = (e) =>{
        const {value} = e
        setJobType(value)
    }
    const handleCategory = (e) =>{
        const {value} = e
        setJobCategory(value)
    }
    const handleInput = (e) =>{
        const query = e.target.value
        e.target.value= ""
        setJobTitle(query)
    }
    const handleOrder = (e) =>{
        const {value} = e
        setJob_order(value)
    }
    const activateFilters = (e)=>{
        e.preventDefault()
        const options = document.querySelector('.options')
        if(options)
        options.style.display = 'block'
    }
    const closeOptions = () =>{
        const options = document.querySelector('.options')
        if(options)
        options.style.display = 'none'
    }
    // categories for jobs, extracted from the API results
    const Category_options = 
    [
        "All","Human Resources","Data","Customer Service","QA","Marketing","Finance / Legal","Sales","Writing","Business","Product","Design","Software Development","All others","DevOps / Sysadmin",
    ];
    // type for jobs, extracted from the API results
    const Type_options = 
    [
        'All','full_time', 'contract', 'part_time', 'other', 'freelance'
    ];
    const order_options = 
    [
        'recent','previous'
    ]
    return (
        <div className='fetcher'>
            <form className='fetcher_form'>
                {/* search by title */}
                <div className='search-box'>
                    <input className='form_input' 
                        type='text' 
                        value = {job_title}
                        onChange = {handleInput}
                        placeholder='Search By Job Title'>
                    </input>
                    <button
                        className='form_btn'
                        onClick={handleSubmit}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className='filter_dropdown'>
                    <button className='filter_dropdown-btn' onClick={activateFilters}>
                        Filter <i className="fas fa-filter"></i>
                    </button>
                </div>
                {/* options for filtering data */}
                <div className='options'>
                    <span className='options_close' onClick={closeOptions}><i className="fas fa-window-close"></i></span>
                    <Dropdown 
                        name = 'category'
                        className='dropdown drop-1'
                        options={Category_options}
                        onChange={handleCategory}
                        value={job_category} 
                        placeholder="category" />
                    {/* search by job type */}
                    <Dropdown
                        options={Type_options}
                        name = 'type'
                        className='dropdown drop-2'
                        onChange={handleType}
                        value={job_type} 
                        placeholder="type" />
                    <Dropdown
                        options={order_options}
                        name = 'Order'
                        className='dropdown drop-3'
                        onChange={handleOrder}
                        value={job_order} 
                        placeholder="order by" />
                </div>

            </form>
        </div>
    )
}

export default Fetcher
