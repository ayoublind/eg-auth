import { Box, Typography } from '@mui/material';

function Footer() {
    const todayDate = new Date().getFullYear();
    return (
        <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography
                color={'text.secondary'}
                variant="body2"
            >{`© ${todayDate}`} All rights reserved to <a href="https://github.com/ayoublind" rel="noreferrer" target="_blank">me</a>.</Typography>
        </Box>
    );
}

export default Footer;
