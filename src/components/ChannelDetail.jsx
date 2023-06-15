import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import Videos from './Videos';
import ChannelCard from './ChannelCard'
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";

function processData(n) {
  if (n) {
    const len = n.length;

    if (len > 3 && len <= 6) {
      var num = Number(n);
      num = num / 1000;

      var dec = num % 1;

      if (dec === 0) {
        return Math.round(num) + "K";
      } else {
        num = num.toFixed(1);
        return num + "K";
      }
    } else if (len > 6 && len <= 9) {
      var num = Number(n);
      num = num / 1000000;

      var dec = num % 1;

      if (dec === 0) {
        return Math.round(num) + "M";
      } else {
        num = num.toFixed(1);
        return num + "M";
      }
    } else {
      return n;
    }
  }

  return n;
}

const ChannelDetail = () => {



  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  if (!channelDetail) return <Loader />;
  return (
    <Box overflow='auto' height='93vh'>
      
      <Box>
        <div style={{
          height: '300px',
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit: 'cover',
          zIndex: 10,
          
        }} />
      </Box>
      <Stack className='creator-detail' sx={{position:'relative', gap: '0px', height: 'auto', marginX: '11%' , alignItems: 'center',gap:'25px' }} flexDirection='row' paddingY={4}  >
      <input type='checkbox' className='sub-btn' 
      style={{position:'absolute',left:'90%'}}
      />
        <img src={channelDetail?.snippet?.thumbnails?.high?.url} style={{ borderRadius: '50%', maxWidth: '130px', maxHeight: '130px' }} />
        <Stack className="details" flexDirection='column' lineHeight='0px'  minWidth='250px' columnGap="0px" alignItems='left' 
        justifyContent='top' 
         height='80px'>

          <h2 style={{ color: 'white', fontWeight: '400' }}>{channelDetail.snippet.title}</h2>
          <p style={{ lineHeight: '0',fontSize:'14px',
            color:'grey'  }}>{channelDetail?.snippet?.customUrl}{"\t"}
            {processData(channelDetail?.statistics?.subscriberCount)} subscribers
            {'\t'}{processData(channelDetail?.statistics?.videoCount)} videos</p>


        </Stack>
      </Stack>

      <Box p={1} sx={{ height: '90vh', flex: 2, marginX: { md: '10%' } }}>
        <Videos videos={videos} />
      </Box>




    </Box>
    // <Box minHeight="500vh" overflow='auto'>
    //   <Box>
    //     <div style={{
    //       height:'300px',
    //       background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
    //       zIndex: 10,
    //     }} />
    //     <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
    //   </Box>
    //   <Box p={2} display="flex" overflow='auto' height='95vh'>
    //   <Box sx={{ mr: { sm: '100px' } }}/>

    //   </Box>
    // </Box>
  );
};

export default ChannelDetail;