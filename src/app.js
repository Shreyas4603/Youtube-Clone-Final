import{BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from "@mui/material"


import Feed  from './components/Feed';
import  VideoDetail  from './components/VideoDetail';
import  ChannelDetail from './components/ChannelDetail';
import  SearchFeed  from './components/SearchFeed';
import SearchBar from './components/SearchBar';
import {logo, menu_logo} from './utils/constants'
import UploadVideo from './components/UploadVideo';
import Navbar from './components/Navbar';

const app = () => 
   (
    <BrowserRouter> 
    <Box sx={{backgroundColor:"#0f0f0f"}}>
    
        <Navbar/>
        
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail  />} />
            <Route path="/search/:searchTerm" element={<SearchFeed/>} />
            <Route path="/upload/" element={<UploadVideo/>}/>
        </Routes>
    </Box>
    
    </BrowserRouter> 
  );


export default app