import { Box } from '@mui/material'
import React from 'react'
import Typography from 'renderer/components/atoms/TextStyles'

type Props = {}

export const GraphNavigationHeader = (props: Props) => {
  return (
    <Box sx={{width:'180px',height:'80px',borderRadius:'7px 7px 0 0',border:'1px solid #293040',padding:'14px 20px'}}>
        <Typography variant='bodySmall' color='#656565'>{title}</Typography>
        <Typography variant='body' color='#EAEAEA'>{info}</Typography>
    </Bo>
  )
}
