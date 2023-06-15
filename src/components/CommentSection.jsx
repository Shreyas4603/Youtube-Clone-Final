import { Box,Stack } from '@mui/material'

import React from 'react'
import { CommentCard } from './CommentCard'
import { Timer } from '@mui/icons-material'

const CommentSection = ({comments}) => {

  return (
    <Stack direction='column'sx={{gap:'10px'}}>
      {
        comments && 
        comments.map((items,idx)=>(
          
          <Box sx={{marginTop:'15px'}}>
            
          <CommentCard
          logo={items?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
          name={items?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          time={items?.snippet?.topLevelComment?.snippet?.publishedAt}
          comment={(items?.snippet?.topLevelComment?.snippet?.textDisplay)}
          likes={items?.snippet?.topLevelComment?.snippet?.likeCount}
          
          
          
          
          
          
          />

          </Box>
          
          
        ))
      }

    </Stack>
    
  )
}

export default CommentSection