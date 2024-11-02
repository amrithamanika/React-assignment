import { Button, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div>
        <br /><br />
        <h1>Add New Product</h1>
        <TextField label='Product name' color='secondary'></TextField><br /><br />
        <TextField label='Description'  color='secondary'></TextField><br /><br />
        <TextField label='Price'  color='secondary'></TextField><br /><br />
        <TextField label='Category'  color='secondary'></TextField><br /><br /><br />
        <Button variant='contained'  color='secondary'>Add Product</Button>
    </div>
  )
}

export default Form