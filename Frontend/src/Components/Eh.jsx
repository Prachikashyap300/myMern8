import React from 'react'
import { enqueueSnackbar } from 'notistack'

const Eh = () => {
    const handleButton = () =>{
        enqueueSnackbar('Yes I am here!!')
    }
  return (
    <div>
        <button onClick={handleButton}>Click me</button>
    </div>
  )
}

export default Eh