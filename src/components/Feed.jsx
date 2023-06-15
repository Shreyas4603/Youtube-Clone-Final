import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState(
    () => localStorage.getItem('selectedCategory') || ''
  );
  const [videos, setVideos] = useState(null);
  const [revealData, setrevealData] = useState()
  const [brand, setbrand] = useState(null)

  useEffect(()=>{

    console.log("hello",localStorage.getItem('reveal'))
    setrevealData(localStorage.getItem('reveal'))
    

  },[])
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));



  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory);
    console.log("local updated")
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
       {revealData == 'true' && (
        
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, px: { sx: 0, md: 2 } }}>

        
     
          <SideBar sx={{display:'hidden'}}
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
          />
       

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
        CopyRight© 2023
        </Typography>
      </Box> 
      
      )}

      <Box p={0} sx={{ overflow:'auto', height: '90vh', flex:2 }}>
        <Videos videos={videos} search={false} />
      </Box>
    </Stack>
  );
};

export default Feed;
