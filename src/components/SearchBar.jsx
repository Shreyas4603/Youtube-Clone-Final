import {useNavigate} from 'react-router-dom'
import{useState,useRef} from 'react'
import {Paper ,IconButton   } from '@mui/material'
import {Search,SearchSharp,SearchOutlined,SearchTwoTone} from '@mui/icons-material' 

const SearchBar = () => {
const [searchTerm, setsearchTerm] = useState('')
const [showSearchIcon, setShowSearchIcon] = useState(false)

const navigate = useNavigate()
var clr='#383937'

const inputRef = useRef(null);
const paperRef=useRef(null);
const inputDivref=useRef(null);

const handleSubmit=(e)=>{

  if(searchTerm){
    navigate(`/search/${searchTerm}`)
    setsearchTerm('')
  }

}



const handleFocus = () => {
  setShowSearchIcon(true)
  paperRef.current.style.border = '1px solid #3182e4';
  paperRef.current.style.gap='0px'

  inputRef.current.style.border = '0px solid #383937';
  inputRef.current.style.textIndent='25px'

  inputDivref.current.style.borderBottomLeftRadius='0px'
  inputDivref.current.style.borderTopLeftRadius='0px'
  



};

const handleBlur = () => {
  setShowSearchIcon(false)
  paperRef.current.style.borderColor = '#383937';
  paperRef.current.style.gap='34px'
  paperRef.current.style.width='40rem'
  paperRef.current.style.border = 'none';

  inputRef.current.style.border = '1px solid #383937';
  inputRef.current.style.textIndent='25px'

  inputDivref.current.style.borderBottomLeftRadius='25px'
  inputDivref.current.style.borderTopLeftRadius='25px'



  
};

  return (
    <Paper
    
    component="form"
    onSubmit={handleSubmit}
    sx={{
      display: 'flex',
      alignItems:'center',
        borderRadius:20,
        width:'40rem',
        background:"transparent",
        
        
        boxShadow:'none',
        // mr:{sm:30},
        gap:0,

        
        
        
    }}
    

    >
<div className='main'
style={{
  // border:`1px solid ${clr}`,
  borderTopLeftRadius:'25px',
  borderBottomLeftRadius:'25px', 
  display:'flex',
  alignItems:'center',
  gap:'34px',
  // background:'green',
  width:'40rem  ',
  marginLeft:'-25px',
  height:'40px'

}}
ref={paperRef}
onFocus={handleFocus}
onBlur={handleBlur}


>
  <div
  style={{
  padding:'4px',
  // background:'red',
  alignItems:'center',
  
 
  }}

  >
    {showSearchIcon && <Search sx={{ color: 'white', align: 'center',paddingLeft:'10px',paddingTop:'5px' }} />}
    </div>

<div className='inputDiv'
style={{
  background:'transparent',
  borderTopLeftRadius:'25px',
  borderBottomLeftRadius:'25px',
  width:'40rem'
  
}}
ref={inputDivref}
onFocus={handleFocus}
onBlur={handleBlur}

>
    <input className='search-bar'
    placeholder='Search'
    value={searchTerm} 
         

    style={{
      textIndent: '25px',
      border:`1px solid ${clr}`,
      backgroundColor:'transparent',
      fontSize:'15px',
      color:'white',
      width:'100%',
      borderTopLeftRadius:'25px',
      borderBottomLeftRadius:'25px',    
      height:'38px',
    
    }}
          ref={inputRef}
    onFocus={handleFocus}
    onBlur={handleBlur}

     

    onChange={(e) =>{ setsearchTerm(e.target.value);clr='#184884'}}
    /></div>

</div>

    <IconButton type="submit" disableRipple
    
    sx={{
     p:'8px' ,
     color:'white' ,
     background:'#29292b',
     width:'70px',
     size:'150px',
     borderTopRightRadius:'25px',
     borderBottomRightRadius:'25px',
     borderTopLeftRadius:'0',
     borderBottomLeftRadius:'0',
     border:'1px solid #383937',
     borderLeftColor:'transparent'
    }}
  >
        <Search fontSize='inherit'/>
    </IconButton>
    </Paper>
  )
}

export default SearchBar