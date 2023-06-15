import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import './CommentCard.css'

export const CommentCard = ({ logo, name, time, comment, likes }) => {
  function processDate(n) {

    const d1 = new Date(n).getTime()
    const d2 = new Date().getTime();

    var diff = Math.round((d2 - d1) / (1000 * 3600 * 24))




    if ((diff >= 1 && diff < 7) || (diff > 7 && diff < 30)) {

      if (diff == 1) { return (diff + ' day ago') }
      else { return (diff + ' days ago') }
    }
    else if (diff == 7) { return ('one week ago') }
    else if (diff >= 30 && diff < 365) { return (Math.round(diff / 30) + ' months ago') }
    else if (diff >= 365) { return (Math.round(diff / 365) + ' years ago') }
    else { return ('Few minutes ago') }
  }

  return (
    <div style={{ backgroundColor: '#0f0f0f', color: 'white', display: 'flex', height: 'auto',gap:'10px',marginLeft:'15px',marginRight:'15px' }}>
      <div className='imageDiv' >
        <img src={logo} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      </div>

      <div className='textDiv' style={{ display: 'flex', flexDirection: 'column', gap: '0px', backgroundColor: '#0f0f0f', fontFamily: 'Roboto' }}>

        <div className='name+upload date' style={{
          display: 'flex', color: 'white', fontFamily: 'Roboto',
          fontSize: '13px',
          fontWeight: '500', gap: '10px', backgroundColor: '#0f0f0f',
          height: '30px'
        }}>
          <p>{name}</p>
          <p style={{ color: 'grey', fontFamily: 'Roboto', fontSize: '13px' }}>{" " + processDate(time)}</p>
        </div>

        <div className='comment-box' style={{ backgroundColor: '#0f0f0f', display: 'flex', flexDirection: 'column', gap: '0%',width:'auto',overflow:'auto',fontSize:'15px' }}>
          <p className='comment' >{comment}</p>
          <div className='like+dislike' style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0f0f0f' }}>
            <button className='like-btn'>



              <ThumbUpOutlinedIcon />


            </button>


            <p>{likes}</p>            
            <button className='like-btn'>



              <ThumbDownOutlinedIcon sx={{fontWeight:'bold'}} />


            </button>

          </div>
        </div>


      </div>





    </div>
  )
}
