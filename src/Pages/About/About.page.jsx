import React  from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './About.styles.css'
import Footer from '../../Components/Footer/Footer';
function About() {
    return (
        <div className='about'>
            <section className='about_intro'>
                <div className='intro_img'>
                    <Carousel 
                    autoPlay={true} infiniteLoop={true} interval={4000} autoFocus={true}
                    showStatus={false} swipeable={true} useKeyboardArrows={true}
                    showThumbs={false}
                     selectedItem={3}>
                    <div className='carousel_img_div'>
                        <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/JobSearchReal.JPG'} />
                        <p className="legend">One of the fastest growing job searching platform !</p>                          
                    </div>
                    <div className='carousel_img_div'>
                        <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/JobSearch.png'} />
                        <p className="legend">Search for jobs, with string sequencing and substring matching features</p>
                    </div>
                    <div className='carousel_img_div'>
                        <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/Requirement.png'} />
                        <p className="legend">Search for based on your requirements and filter filter them based on  Job Type, Job Category, Recency etc</p>
                    </div>
                    <div className='carousel_img_div'> 
                        <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/Logo.png'} />
                        <p className="legend">Feel free to contact us, to partner with our organization</p>
                    </div>   
                    <div className='carousel_img_div'> 
                    <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/CompanyGrpLogo.png'} />

                        <p className="legend">Our Hiring Partners include</p>
                    </div>
                    <div className='carousel_img_div'> 
                    <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/CompanyGrpLogo1.png'} />
                        <p className="legend">Our Hiring Partners include</p>
                    </div>
                    <div className='carousel_img_div'> 
                    <img className ='carousel_img' alt='carousel_img' src={process.env.PUBLIC_URL + '/CompanyGrpLogo2.png'} />
                        <p className="legend">Our Hiring Partners include</p>
                    </div>                                                           
                    </Carousel>
                </div>
               <div className='intro_content'>
                   <h1>
                       Jobs4You
                   </h1>
                   <p>Jobs for you is a Job finding platform for students who are actively looking for internship opportunities, working professionals looking to change companies</p>
                   <p>This site has regular job updates, where you can get the quickest match for your desired job by making use of the filters and searching features</p>
               </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
