import { Button } from '@mui/material'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import './descBox.css'

const DescriptionBox = ({ desc, views,published }) => {
    const [expand, setexpand] = useState(false)
    const ref = useRef(null)

    function processDate(n)
    {   
        
        const d1 = new Date(n).getTime()
        const d2 = new Date().getTime();

        var diff=Math.round((d2-d1)/(1000*3600*24))
        



        if((diff>=1 && diff<7) ||(diff>7 && diff<30)){return(diff+' days ago')}
        else if(diff==7){return('one week ago')}
        else if(diff>=30 && diff<365){return (Math.round(diff/30)+' months ago')}
        else if( diff>=365){return (Math.round(diff/365)+' years ago')}
    }

    return (
        <div className='desc-box'>

            <p className='cuttoff-text'> {views +' Views '+processDate(published)}<br/> {desc}</p>
            <input type='checkbox' className='expand-btn' />
        </div>
    )
}

export default DescriptionBox