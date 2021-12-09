//  import statements  -----------
import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Tag from '../Tag/Tag.component';
import './Card.styles.css'

//  React Functional Component --------
function Card({jobDetail}) {
    // Converting the recieved date into user understandable format
    var rightNow = new Date(jobDetail.publication_date);  
    var PostedDate = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
    // React state variable
    const [tags,setTags] = useState([])
    const [tagsString,setTagsString] = useState('')

    // function to count occurrences of a char in a string
    const count =(st,c)=> { 
        var result = 0, i = 0;
        for(i;i<st.length;i++)if(st[i]===c)result++;
        return result;
      };
    //   functions to open and close the tags form
    const openTagsForms = () =>{
        var formInput = document.querySelector(`#tags_input-${jobDetail.id}`)
        formInput.style.display = 'block'
    }
    const closeTagsForm = () =>{
        var formInput = document.querySelector(`#tags_input-${jobDetail.id}`)
        formInput.style.display = 'none'
    }
    // this function adds tags to the card, it also adds the tags to the local storage for persistence
    const addTags = (e) =>{
        e.preventDefault()
        var strList = tagsString.split(',')
        strList = strList.map(i=>i.trim())
        var tagsStr = localStorage.getItem('tagsDirectory')
        var tagsDict = JSON.parse(tagsStr)
        if(tagsDict===null || tagsDict.length === 0) tagsDict={}
        tagsDict[jobDetail.id]=strList
        localStorage.setItem('tagsDirectory',JSON.stringify(tagsDict))
        setTags(strList)
        setTagsString('')
    }
    //  function to update the change in tag-values, it also keeps a check on tha max-3 value
    const handleTags = (e) =>{
        const value = e.target.value 
        if(value && value.length >1 && count(value,',')>2)
        {
            document.querySelector(`#tags_inp-${jobDetail.id}`).style.color = 'red'
            document.querySelector(`#tags_btn-${jobDetail.id}`).disabled = true
            setTagsString(value)
        }
        else{
            document.querySelector(`#tags_inp-${jobDetail.id}`).style.color = 'black'
            document.querySelector(`#tags_btn-${jobDetail.id}`).disabled = false
            setTagsString(value)
        }
    }
    // loading the tags into the card , when the component loads
    useEffect(() => {
        let tagsStr = localStorage.getItem('tagsDirectory')
        let tagsDict = JSON.parse(tagsStr)
        if(tagsDict  && tagsDict[jobDetail.id])
        {
            setTags(tagsDict[jobDetail.id])
        }
    },[])

    return (
        <div className='card' >
            {/* entire card is clickable - <Link> */}
            <Link 
                className='moreInfo_link'
                target='_blank_'
                to={{
                    pathname:`/Job-${jobDetail.id}`,
                    params : jobDetail.params}}>
                <div className='moreInfo'>
                    <h3 className='job_company'>
                        {jobDetail.company_name}
                    </h3>
                    <div className='tags_container'>
                        {
                            tags.map((tag,ind)=>(
                                tag.length>0?
                                <Tag key={`${jobDetail.id}-${ind}`}string={tag}/>:null
                            ))
                        }
                    </div>
                <h4 className='job_header'>
                    {jobDetail.title} 
                </h4>
               <p><b>Eligible Location: </b>{jobDetail.candidate_required_location}</p>
                <p><b> Posted on: </b>{PostedDate}</p>
                <p>This is a { jobDetail.job_type ? jobDetail.job_type: 'normal'} role</p>
            </div>
            </Link>
            {/* mechanism to add the tags to the card */}
            <div className='addTags'>
                    <button onClick={openTagsForms}>add tags</button>
            </div>
            <div id ={`tags_input-${jobDetail.id}`} className='tags_input'>
                <span onClick={closeTagsForm}> <b>X</b></span>
                <form className='tags_form'>
                    <input autoFocus id ={`tags_inp-${jobDetail.id}`}className='tags_inp' value={tagsString} onChange={handleTags} type='text' placeholder='enter tags separated by , '></input>
                    <button id ={`tags_btn-${jobDetail.id}`} type='submit' onClick={addTags}><b>+</b></button>
                </form>
            </div>
        </div>
    )
}

export default Card
