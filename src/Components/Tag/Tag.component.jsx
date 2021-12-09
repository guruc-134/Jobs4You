import React from 'react'
import './Tag.style.css'
function Tag({string}) {
    return (
        <div className='tag'>
            {string}
        </div>
    )
}

export default Tag
