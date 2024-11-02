import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
     var[app,setapp]=useState([]);
     useEffect(()=>{
     axios.get("https://fakestoreapi.com/products")
     .then((response)=>{
        console.log(app);
        setapp(response.data);
     })
    //  .catch((error)=>{console.log(error)})
    },[])
  return (
    <div>
      <br /><br /><br />
      <Grid container spacing={2}>
        {app.map((val)=>{
            return(
             <Grid item xs={10} sm={5} md={3}>
             <Card>
                <CardMedia component="img" image={val.image} height='250'></CardMedia>
                <CardContent>
                    <Typography>{val.title}</Typography>
                    <Typography>Price:{val.price}</Typography>
                    <Typography>Category:{val.category}</Typography>
                    {/* <Typography>{val.image}</Typography> */}
                </CardContent>
                <CardActions>
                    <Button size='small'>view</Button>
                </CardActions>
            </Card>
            </Grid>
            )
        })}
    </Grid>
    </div>
  )

}
export default Home