import { IconButton, Stack, ToggleButton, colors } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo, menu_logo } from '../utils/constants'
import SearchBar from './SearchBar'
import UploadVideo from './UploadVideo';
import { VideoCallOutlined } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import React, { useState, useEffect } from 'react';
import Videos from './Videos';
import Feed from './Feed'
import {useNavigate} from 'react-router-dom'
// import './reveal.js'

const Navbar = () =>{
  localStorage.setItem('reveal',true)
// const [selectedCategory, setselectedCategory] = useState('Videos');
// const [videos, setvideos] = useState(null);
const navigate = useNavigate()

// useEffect(() => {
//   setvideos(null);
//   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
//     .then((data) => setvideos(data.items))
// }, [selectedCategory]);
return(
  

  <Stack direction='row'
    alignItems='center'
    p={1}
    sx={{ position: 'sticky', background: '#0f0f0f', top: 0, justifyContent: 'space-between' }}>
  <div style={{display:'flex',gap:'20%'}}>
    <img src={menu_logo} alt='logo' height={22} className='menu-icon'

onClick={()=>{



  if(localStorage.getItem('reveal')=='false'){
    localStorage.setItem('reveal','true')
    console.log(localStorage.getItem('reveal'))
  }
  else if(localStorage.getItem('reveal')=='true'){
    localStorage.setItem('reveal','false')
    console.log(localStorage.getItem('reveal'))
  }
}}



    />
      
      
    <Link to='/' style={{ display: 'flex', alignItems: 'center',paddingRight:'10px' }} >
      <img src={logo} alt='logo' height={22} onClick={()=>{navigate(`/`) ;localStorage.setItem('selectedCategory', "");window.location.reload()}}/>
    </Link>
 </div>







      <SearchBar/>




    <div style={{display:'flex',gap:'10%',paddingRight:'1%'}}>
      <div>
        <Link to='/upload/'>
          <IconButton type='submit'
            sx={{
              color: "white", p: '8px', size: '50px', "&:hover": { background: '#29292b' }
            }}

          >

            <VideoCallOutlined />
          </IconButton>
        </Link>
      </div>

      <div>
      <Link to='/notification/'>
            <IconButton sx={{
              color: "white", p: '8px', size: '50px', "&:hover": { background: '#29292b' }
            }}>
              <NotificationsNoneSharpIcon/>
            </IconButton>






      </Link>
      </div>

      <div>
      <Link to='/profile/'>
            <IconButton sx={{
              color: "white", p: '8px', size: '50px', "&:hover": { background: '#29292b' }
            }}>
              <AccountCircleOutlinedIcon/>
            </IconButton>






      </Link>
      </div>
    </div>


  </Stack>


)
          }

export default Navbar