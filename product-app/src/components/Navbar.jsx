import React from 'react'
import {AppBar,Toolbar,Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
            background: 'rgb(131,58,180)',
            background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,169,253,1) 50%, rgba(222,69,252,1) 100%)'

        }}>
         <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>&nbsp;&nbsp;
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;RADIENT-WEAR
          </Typography>
          <Link to='/home'>
          <Button color="inherit">Home</Button></Link>
          &nbsp;
          <Link to='/add'>
          <Button color="inherit">Add</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar