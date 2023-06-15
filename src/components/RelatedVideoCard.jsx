import React from 'react'
import { Box, Stack } from '@mui/material'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { Link,useParams } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../utils/constants'

//video?.id?.videoID
function processDate(n) {

    const d1 = new Date(n).getTime()
    const d2 = new Date().getTime();

    var diff = Math.round((d2 - d1) / (1000 * 3600 * 24))




    if ((diff >= 1 && diff < 7) || (diff > 7 && diff < 30)) {

      if (diff == 1) { return (diff + ' day ago') }
      else { return (diff + ' days ago') }
    }
    else if (diff == 7) { return ('one week ago') }
    else if (diff >= 30 && diff < 365) { return (Math.round(diff / 30) + ' months ago') }
    else if (diff >= 365) { return (Math.round(diff / 365) + ' years ago') }
    else { return ('Few minutes ago') }
  }


const RelatedVideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.id?.videoId}`}>
    <Box className='main-card' style={{display:'flex',marginTop:'10px',marginRight:'20px',backgroundColor:'#0f0f0f',alignItems:'center',gap:'10px'}}  >

                <img src={video?.snippet?.thumbnails?.high?.url} style={{minWidth:'170px',height:'110px',objectFit:'scale-up', borderRadius:'10px',}} />
                <div style={{display:'flex',flexDirection:'column',height:'100px',backgroundColor:'#0f0f0f',fontFamily:'Roboto',gap:'0px',justifyItems:'left',gap:'10px',marginTop:'10px'}}>
                    <div style={{color:'white',fontSize:'15px',backgroundColor:'#0f0f0f' ,fontWeight:'500',overflow:'hidden',WebkitLineClamp:'2',whiteSpace:'break-spaces',maxHeight:'37px'}}>{video?.snippet?.title}</div>
                    <div><p style={{lineHeight:'0',color:'white',opacity:'60%',fontSize:'13px'}}>{video?.snippet?.channelTitle}</p></div>
                    <div style={{lineHeight:'0',color:'white',opacity:'60%',fontSize:'13px'}}>{processDate(video.snippet?.publishTime)}</div>
                    

                </div>





    </Box>
    </Link>
  )
}

export default RelatedVideoCard