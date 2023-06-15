import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack, Button, colors } from '@mui/material'
import DescriptionBox from './DescriptionBox'
import RelatedVideos from './RelatedVideos';
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ShowMoreText from 'react-show-more-text'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import { Rotate90DegreesCcwOutlined } from '@mui/icons-material'
import CommentSection from './CommentSection'
import Loader from './Loader'
import './subscribe-btn.css'


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



const VideoDetail = () => {

  const [videoDetail, setvideoDetail] = useState(null)
  const { id } = useParams();
  const descRef = useRef(null);
  const typeRef = useRef(null);
  const scroll = useRef(null);

  const [channelData, setchannelData] = useState(null);
  const [commentsData, setcommentsData] = useState(null);
  const [relatedVideos, setrelatedVideos] = useState(null);







  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideoDetail(data.items[0]))



  }, [id])

  useEffect(() => {
    console.log('id', id)
    fetchFromAPI(`commentThreads?videoId=${id}`)
      .then((dataCom) => setcommentsData(dataCom.items))


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((dataR) => setrelatedVideos(dataR.items))


  }, [id])

  useEffect(() => {
    fetchFromAPI(`channels?id=${videoDetail?.snippet?.channelId}`)
      .then((dataC) => setchannelData(dataC.items[0]))

  }, [videoDetail?.snippet?.channelId])





  const [isClicked, setIsClicked] = useState(false);
  const [disClicked, setdisClicked] = useState(false);

  const handleClick = () => {
    if (disClicked == false)
      setIsClicked(prevState => !prevState);
    setdisClicked(false)
  };

  const dishandleClick = () => {
    if (isClicked == false) {
      setdisClicked(prevState => !prevState);
      setIsClicked(false)
    }
  };









  if (!videoDetail?.snippet) return <Loader />;
  if (!relatedVideos) return <Loader />;

  const { snippet: { title, channelId, channelTitle, publishedAt }, statistics: { viewCount, likeCount } } = videoDetail;

  var description = videoDetail?.snippet?.description;

  var len = description.length

  function handleShowMore() {
    console.log(`${len / 10}px`);
    descRef.current.style.height = `${Math.round(len / 5)}px`
    typeRef.current.style.height = `${Math.round(len / 5)}px`

    typeRef.current.style.textOverflow = '50px'

  }






  return (
    <Box className="video-detail" backgroundColor='#0f0f0f' height='100vh'  >
      <Box height='100%' sx={{ backgroundColor: '#0f0f0f' }} overflow='auto' marginLeft={{ lg: '5.5%', md: '20px', sm: '20px' }}>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ backgroundColor: '#0f0f0f', }}>
          <Box sx={{ backgroundColor: '#0f0f0f', }} className='videodetails' maxWidth={{ md: '67.7vw', xs: 'auto', sm: 'auto' }} overflowY='auto'>
            <Box sx={{ postion: 'sticky', top: '86px', aspectRatio: '16/9' }}   >

              {<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}


                height='100%'


                width='100%'
                playing

                className="react-player"
                controls
              // onReady={handlePlayerReady}
              />}
            </Box>


            <Box sx={{ backgroundColor: '#0f0f0f', paddingY: '7px' }}>
              {videoDetail && (
                <Typography sx={{ color: 'white', fontSize: '20px' }}>
                  {title}
                </Typography>
              )}
            </Box>


            <Stack className='main-stack' sx={{ backgroundColor: "#0f0f0f", }} direction={{ xs: 'column', md: 'row' }} alignItems={{ sm: 'left', md: 'center', lg: 'center' }} justifyContent="space-between" flexWrap='wrap'>

              <Stack className='logo-name-subs-subscribe' direction='row' backgroundColor='transparent' alignItems='center' gap='20px'>

                <Stack className='logo-{name-subcount}' sx={{ alignItems: 'center' }} direction='row'>
                  <Link to={`/channel/${channelId}`}>
                    <img src={channelData?.snippet?.thumbnails?.high?.url} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                  </Link>

                  <Stack className='name-subcount' direction='column' padding={1} backgroundColor="#0f0f0f" alignContent='left'>


                    <Link to={`/channel/${channelId}`}>
                      <Typography varient={{ sm: 'subtitle', md: 'h1' }} color='white' fontSize='15px'>
                        {channelTitle}
                      </Typography>
                    </Link>

                    <Typography sx={{ color: 'grey', fontSize: '12px' }}>
                      {processData(channelData?.statistics?.subscriberCount) + " subscribers"}
                    </Typography>

                  </Stack>
                </Stack>
                <input type='checkbox' className='sub-btn' />
                {/* <Button className='subcribe'
                  sx={{
                    color: 'black',
                    backgroundColor: 'white'
                    , borderRadius: '50px',
                    fontSize: '13px',
                    textTransform: 'capitalize',
                    paddingX: '15px', paddingTop: '8px', height: '35px', ":hover": { backgroundColor: '#d9d9d9' }, fontWeight: '.1'
                  }} disableFocusRipple>
                  Subscribe
                </Button> */}


              </Stack>


              <Stack className='like-dislike-share-download-more' direction='row' justifyContent={{ md: 'space-around', sm: 'left' }} gap='10px'>

                <Stack className='like-seperator-dislike' direction='row' backgroundColor='#2c2c2b'
                  alignItems='center'
                  borderRadius='50px'
                  paddingY='0px'
                  height='37px'

                >
                  <Button


                    sx={{
                      backgroundColor: '#2c2c2b',
                      height:'37px',
                      color: 'white',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '96px',
                      paddingTop: '4px',
                      paddingBottom: '0px',
                      paddingLeft: '12px',
                      alignItems: 'center',
                      borderTopLeftRadius: '50px',
                      borderBottomLeftRadius: '50px',
                      ":hover": { backgroundColor: '#5b5b5c' },
                      fontSize:'14px',
                      paddingRight:'15px'
                    }}

                    onClick={handleClick}
                  >


                    <span>{isClicked ? <ThumbUpIcon sx={{ color: 'white', fill: 'white',paddingTop:'10px' }} /> : <ThumbUpOutlinedIcon sx={{ color: 'white' }} />}</span>
                    <span >{processData(likeCount)}</span>
                  </Button>

                  <div className='seperator'
                    style={{
                      border: '1px solid #69696a',
                      height: '25px',
                      ":hover": { backgroundColor: '#5b5b5c' }
                    }}>

                  </div>

                  <Button
                    sx={{
                      backgroundColor: '#2c2c2b',
                      color: 'white',
                      height: '37px',
                      paddingTop: '5px',
                      paddingBottom: '0px',
                      paddingLeft: '0',
                      alignItems: 'center',
                      borderTopRightRadius: '50px',
                      borderBottomRightRadius: '50px',
                      ":hover": { backgroundColor: '#5b5b5c' }
                    }}
                    onClick={dishandleClick}
                  >
                    {disClicked ? <ThumbDownIcon sx={{ color: 'white', fill: 'white' }} /> : <ThumbDownOutlinedIcon sx={{ color: 'white' }} />}

                  </Button>
                </Stack>


                <Button
                  sx={{
                    backgroundColor: '#2c2c2b',
                    color: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90px',
                    paddingTop: '4px',
                    paddingBottom: '0px',
                    paddingRight: '15px',
                    alignItems: 'center',
                    borderRadius: '50px',

                    ":hover": { backgroundColor: '#5b5b5c' },
                    textTransform: 'capitalize',
                  }}>

                  <span style={{ color: 'white' }}><ReplyIcon style={{ transform: 'scaleX(-1)' }} /></span>
                  <span >Share</span>
                </Button>

                <Button
                  sx={{
                    backgroundColor: '#2c2c2b',
                    color: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '8px',

                    paddingTop: '6px',
                    paddingBottom: '0px',
                    paddingRight: '15px',
                    alignItems: 'center',
                    borderRadius: '50px',
                    ":hover": { backgroundColor: '#5b5b5c' },
                    textTransform: 'capitalize',
                  }}>

                  <span style={{ color: 'white' }}><DownloadSharpIcon style={{ transform: 'scaleX(-1)', }} /></span>
                  <span style={{ paddingBottom: '3px' }} >Download</span>
                </Button>

                <Button
                  sx={{
                    backgroundColor: '#2c2c2b',
                    color: 'white',

                    alignItems: 'center',
                    borderRadius: '25px',
                    ":hover": { backgroundColor: '#5b5b5c' },

                  }}
                >

                  <MoreHorizSharpIcon />
                </Button>

              </Stack >

            </Stack>


            <DescriptionBox desc={description} views={processData(viewCount)} published={videoDetail?.snippet?.publishedAt} />

            <Box sx={{ height: 'auto', backgroundColor: '#0f0f0f', }} display={{ xs: 'none', md: 'block', lg: 'block' }}>
              <CommentSection comments={commentsData} />
            </Box>



          </Box>

          <Stack backgroundColor='#0f0f0f' sx={{ marginLeft: { lg: '25px', md: '10px', xs: '0px' }, marginBottom: '30px' }}
          >
            <RelatedVideos videos={relatedVideos} />
          </Stack>
          <Box sx={{ height: 'auto', backgroundColor: '#0f0f0f' }} display={{ xs: 'block', md: 'none', lg: 'none' }}>
            <CommentSection comments={commentsData} />
          </Box>

        </Stack>

      </Box>
    </Box>
  )
}

export default VideoDetail