import { Box } from '@mui/system'
import React from 'react'
import notFound from '../assets/img/not-data.jpg'

export default function NotFound() {
  return (
    <Box>
        <img src={notFound} alt="" />
    </Box>
  )
}
