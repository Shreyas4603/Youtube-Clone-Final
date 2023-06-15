
import React from 'react'
import { Box, Stack } from '@mui/material'
import RelatedVideoCard from './RelatedVideoCard'

const RelatedVideos = ({ videos }) => {
    console.log('r videos',videos)
      return (
        <Stack
          sx={{overflowInline:'auto'}}
          direction='column'
          flexWrap='wrap'
          justifyContent='center'
          
        > 
          {
          
         
          videos &&
            videos.map((item, idx) => (
              
              <Box key={idx} >
                {item.id.videoId && <RelatedVideoCard video={item} />}

              </Box>
            ))}
        </Stack>
      )
    }
export default RelatedVideos