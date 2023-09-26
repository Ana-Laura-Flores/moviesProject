import { Box } from '@mui/system'
import React from 'react'
import notFound from '../assets/img/not-data.jpg'

export default function NotFound() {
  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src={notFound} style={{width: "40%"}} alt="" />
    </Box>
  )
}
