import React from 'react'
import { Stack } from '@mui/material'
import { box1, categories, box2,box3 } from '../utils/constants.js'
import { PaddingRounded } from '@mui/icons-material'
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import {useNavigate} from 'react-router-dom'

const SideBar = ({selectedCategory,setselectedCategory}) =>{
const navigate = useNavigate()
var home;
return(
    <Stack
        direction='row'
        sx={{
            overflowY: 'hidden',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column', sd: 'row' },
            
        }}
    >
        {box1.map((category) => (
            <button className='category-btn'

                onClick={()=>{
                    navigate(`/`);
                    
                    if (category.name !== "Subscriptions") {
                        setselectedCategory(category.name);
                        
                    } if(category.name == "Home") {
                        setselectedCategory('');

                    }}}
                key={category.name}
                
                style={{ background: category.name === (selectedCategory || 'Home') && "#272727", color: "white" }}
            >

                <span>{category.icon}</span>
                <span>{category.name}</span>


            </button>


        ))}

        <div style={{ borderBottom: '1px solid #373737', paddingBottom: '10px', display: 'flex' }} ></div>
        <br></br>
            {box2.map((category) => (
                <button className='category-btn'
                // onClick={()=>setselectedCategory(category.name)}
                    key={category.name}
                    style={{ background: category.name === selectedCategory && "#272727", color: "white" }}
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
                <div style={{ borderBottom: '1px solid #373737', paddingBottom: '10px' }}></div>

                <br></br>
            {box3.map((category) => (
                <button className='category-btn'
                onClick={()=>setselectedCategory(category.name)}
                    key={category.name}
                    style={{ background: category.name === selectedCategory && "#272727", color: "white" }}
                >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
                <div style={{ borderBottom: '1px solid #373737', paddingBottom: '10px' }}></div>

        {/* {categories.map((category) => (
            <button className='category-btn' 
            style={{ background: category.name === selectedCategory && "#272727", color: "white" }}
            >
                <span>{ category.icon}</span>
                <span>{category.name}</span>

            </button>

        ))} */}







    </Stack>
)

}
export default SideBar