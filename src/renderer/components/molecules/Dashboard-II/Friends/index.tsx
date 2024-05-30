import { Box } from '@mui/material'
import React from 'react'
import CopperLeftIcon from 'renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperLeftIcon';
import { CopperRightIcon } from 'renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperRightIcon';
import Typography from 'renderer/components/atoms/TextStyles'

type Props = {
    userName:string;
}

const Friends = ({userName}: Props) => {
  return (
    <Box sx={{padding:'14px 15px 16px 14px',width:'467px',height:'54px',display:'flex',justifyContent:'space-between'}}>
        <Box sx={{display:'felx',gap:'4px'}}> 
            <CopperLeftIcon/>
            <Typography variant='bodySmall' color='#EAEAEA'>{userName}#00</Typography>
            <CopperRightIcon/>
        </Box>
        <Box><Typography variant='bodySmall' color='#8C8C8C'>Mining for {miningTime}</Typography></Box>
    </Bo>
  )
}
