import React from 'react'
import './HomePage.style.css'
function Home() {
    return (
        <div className='home'>
            This is the home page
            <section className='home_intro'>
                This is the intro section
                <img src={process.env.PUBLIC_URL + '/Logo.png'} />
                <p>
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                </p>
                <p>
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                   Lorem100
                </p>
            </section>
            <div className='randomJobs'>
                This section displays random jobs
            </div>
        </div>
    )
}

export default Home
