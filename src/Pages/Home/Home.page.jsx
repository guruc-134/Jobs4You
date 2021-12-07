import React ,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import Card from '../../Components/Card/Card.component';
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

    const shuffle = (array)=> {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    const fetchJobs = () =>{
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
        var jobsList = JSON.parse(data)
        jobsList.sort((a,b)=>Date(a.publication_date) > Date(b.publication_date)?-1:1)
        setJobs(jobsList.splice(1,100))
    }
    useEffect(() => {
      fetchJobs()
    }, [])
    return (
        <div className='home'>
            <section className='home_intro'>
                <div className='intro_img'>
                    <img src={process.env.PUBLIC_URL + '/Logo.png'} />
                </div>
               <div className='intro_content'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
               </div>
            </section>
            <div className='features'>
                <div className='feature_tag'>
                    <i class="fas fa-search"></i>
                    <p> Search for jobs, with string sequencing  and substring matching features</p>
                </div>
                <div className='feature_tag'>
                    <i class="fas fa-filter"></i>
                    <p> Filter for the job results, based on Job Type, Job Category etc</p>
                </div>
                <div className='feature_tag'>
                    <i class="fas fa-tags"></i>
                    <p> Use tags to classify and further describe the Job post</p>
                </div>
            </div>
                <h2>
                    Here are some recent jobs postings <i>
                        (ordered by publication date) </i>
                     that you might like
                </h2>
            <div className='randomJobs'>
            {   jobs.length >0 ? displayItems: 
                null}
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

export default Home
