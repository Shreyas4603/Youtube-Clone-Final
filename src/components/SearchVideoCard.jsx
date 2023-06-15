import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../utils/constants'

const SearchVideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card style={{ backgroundColor: 'transparent' ,display:'flex',flexDirection:'row',width:'60vw'}}>
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
      <CardContent
        sx={ {display: 'flex', flexDirection: 'column', gap:'30%', backgroundColor: 'transparent', height: '80px', width: '60vw', boxShadow: 'none' ,paddingBlockEnd:'50px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant='subtitle1'
            fontWeight='bold' color='white'



          >{snippet?.title.slice(0, 100) || demoVideoTitle.title.slice(0, 1000)}
          </Typography>
          <Typography
            variant='subtitle1'
            fontWeight='bold' color='white'

          >{snippet?.title.slice(100, 200) || demoVideoTitle.title}
          </Typography>

        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant='subtitle2'
            color='grey'
            paddingY='20px'
          >{snippet?.channelTitle || demoChannelTitle.title}<br/>{snippet?.description}

          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}

export default SearchVideoCard