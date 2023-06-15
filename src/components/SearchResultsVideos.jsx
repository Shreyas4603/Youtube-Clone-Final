import { Box, Stack } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import SearchVideoCard from './SearchVideoCard'

const SearchResultVideos = ({ videos }) => {
  return (
    <Stack
      sx={{overflowInline:'auto'}}
      direction='column'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      {videos &&
        videos.map((item, idx) => (
          <Box key={idx} display='flex' flexDirection='row' >
            {item.id.videoId && <SearchVideoCard video={item} />}
            {item.id.channelId && (
              <ChannelCard channelDetail={item} />
            )}
          </Box>
        ))}
    </Stack>
  )
}

export default SearchResultVideos
