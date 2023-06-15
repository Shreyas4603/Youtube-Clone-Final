import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material'
import SearchResultsVideos from './SearchResultsVideos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import Videos from './Videos';

const SearchFeed = () => {

  const [selectedCategory, setselectedCategory] = useState('Videos');
  const [videos, setvideos] = useState(null);
  const { searchTerm } = useParams();
  console.log(searchTerm)


  useEffect(() => {
    setvideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setvideos(data.items))
  }, []);

  return (


    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }} >
    <Box sx={{ width: { sx: 'auto', md: '200px' }, height: { sx: 'auto', md: '92vh' }, border: '0px solid #ff0015', px: { sx: 0, md: 1.5 } }}>
      <SideBar
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
      />
      <Typography className='copyright' varient='body2' sx={{ mt: 1.5, color: '#ffffff' }}>
        CopyRight 2023
      </Typography>
    </Box>


    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2, overflowY: 'auto' }}>
      
      
        <Videos videos={videos} search={true} />
      
      


    </Box>
  </Stack>
  )
}

export default SearchFeed