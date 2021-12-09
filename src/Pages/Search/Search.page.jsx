import React , {useState}from 'react'
import Card from '../../Components/Card/Card.component'
import Fetcher from '../../Components/Fetcher/Fetcher'
import ReactPaginate from 'react-paginate';
import '../../Components/Pagination/Pagination.styles.css'
import './Search.style.css'
function Search() {
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

    return (
        <div className='SearchPage'>
            <Fetcher jobs ={jobs} setJobs = {setJobs}/>
            <div className="job_cards">
                {   jobs.length >0 ? displayItems: 
                <div>
                    <h3>Search for jobs based on title</h3>
                    <img  alt='search_img' src={process.env.PUBLIC_URL + '/JobSearchPage.jpg'} />
                </div>
                    } 
            </div>
            {jobs.length > 0?
            <ReactPaginate
            previousLabel = {"previous"}
            nextLabel = {"next"}
            pageCount = {pageCount}
            onPageChange = {changePage}
            containerClassName = {"paginationBtns"}
            previousLinkClassName = {"previousBtn"}
            nextLinkClassName = {"nextBtn"}
            disabledClassName = {"paginationDisabled"}
            activeClassName  = {"paginationActive"}
            />
                :null}
            </div>
    )
}

export default Search
