import { useState, useEffect, useRef } from 'react'
import { Link,useParams } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../utils/constants'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Loader from './Loader'
//video?.author?.avatar[0]?.url
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  const {ID}=useParams()
  const [brand, setbrand] = useState()

    if (!snippet) return <Loader/>;
  console.log("snippet",snippet)

 
  return (

   
    <Card style={{ backgroundColor: 'transparent' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 365,
            height: 200,
            borderRadius: 3,
            backgroundColor: 'transparent',
            backgroundClip: 'padding-box',
            ':hover': { borderRadius: 0 },
            boxShadow:'none'
          }}
        />
      </Link>
      <CardContent //#0f0f0f
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'transparent', height: '80px', width: '333px', boxShadow: 'none' }}>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',backgroundColor:''}}>

          
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          
          <Typography
            variant='subtitle1'
            fontWeight='bold' color='white'
            fontSize='16px'
          // sx={{
          //   whiteSpace: 'pre-wrap',
          //   overflowWrap: 'break-word',
          //   lineHeight: '1.2em',
          //   height: '3.6em',
          //   display: '-webkit-box',
          //   '-webkit-line-clamp': 2,
          //   '-webkit-box-orient': 'vertical',
          // }}


          >{snippet?.title.slice(0, 35) || demoVideoTitle.title.slice(0, 40)}
          </Typography>
          <Typography
            variant='subtitle1'
            fontWeight='bold' color='white'
            fontSize='16px'

          >{snippet?.title.slice(35, 80) || demoVideoTitle.title}
          </Typography>
        
        </Link>
  
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant='subtitle1'
            fontSize='14px'
            color='grey'
          >{snippet?.channelTitle || demoChannelTitle.title}
          </Typography>
        </Link>
        </div>
      </CardContent>

    </Card>
  )
}

export default VideoCard