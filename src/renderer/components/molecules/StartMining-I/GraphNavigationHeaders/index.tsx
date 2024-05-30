import { Box } from '@mui/material'
import Typography from 'renderer/components/atoms/TextStyles'

type GraphNavigationHeaderProps = {
  title:string;
  info:string;
}

export const GraphNavigationHeader = ({title,info}: GraphNavigationHeaderProps) => {
  return (
    <Box sx={{maxWidth:'180px',maxHeight:'81px',borderRadius:'7px 7px 0 0',border:'1px solid #293040',padding:'14px 20px'}}>
        <Typography variant='bodySmall' color='#656565'>{title}</Typography>
        <Typography variant='body' color='#EAEAEA'>{info}</Typography>
    </Bo>
  )
}
