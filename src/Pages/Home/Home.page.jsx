import React ,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import Card from '../../Components/Card/Card.component';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import './HomePage.style.css'
function Home() {
    const [jobs,setJobs] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const   itemsPerPage = 20;
    const pagesVisited = pageNumber * itemsPerPage
    // function  for pagination
    const displayItems = jobs.slice(pagesVisited, pagesVisited + itemsPerPage)
    .map( jobDetail =><Card jobDetail={jobDetail} key={jobDetail.id}/>)  
    var pageCount = Math.ceil(jobs.length / itemsPerPage)
    const changePage = ({selected}) =>
    {setPageNumber(selected)}

    const fetchJobs = () =>{

        //  to avoid overusing the API, the jobs have been stored to the localStorage of the browser
        //  to enable smooth developing and testing 
        var data = localStorage.getItem("jobs")
        var jobsList = JSON.parse(data)
        if (jobsList === null || jobsList.length === 0)
        {
            // fetching from the the REST API
            axios.get('https://remotive.io/api/remote-jobs')
            .then(resp=> {
                    localStorage.setItem("jobs",JSON.stringify(resp.data.jobs.splice(0,400)))
                    let jobsList = resp.data.jobs
                    jobsList.sort((a,b)=>Date(a.publication_date) > Date(b.publication_date)?-1:1)
                    setJobs(jobsList)
                })
        }
        jobsList.sort((a,b)=>Date(a.publication_date) > Date(b.publication_date)?-1:1)
        setJobs(jobsList.splice(1,100))
    }
    useEffect(() => {
      fetchJobs()
    }, [])
    return (
        <div className='home'>
            <h2 className='randomjobs_heading'>
                Here are some recent jobs postings
                        that you might like
            </h2>
            <div className='randomJobs'>
            {   jobs.length >0 ? displayItems: 
                null}
            </div>
            {jobs.length > 0?
            <ReactPaginate
            previousLabel = {"Previous"}
            nextLabel = {"Next"}
            pageCount = {pageCount}
            onPageChange = {changePage}
            containerClassName = {"paginationBtns"}
            previousLinkClassName = {"previousBtn"}
            nextLinkClassName = {"nextBtn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName  = {"paginationActive"}
            />
                :null}
                <Footer/>
        </div>
    )
}

export default Home
