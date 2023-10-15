import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from 'components/common/Logo';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoggingOut } from 'store/slices/authSlice';

interface NewHeaderProps {
    sx: object;
    customClass?: string;
}

function Header({ sx, customClass }: NewHeaderProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLoggingOut());
        navigate('/');
    }

    return (
        <AppBar sx={sx} elevation={0} className={customClass}>
            <Toolbar>
                <Box component="div" sx={{ flexGrow: 1 ,width: '250px'}}>
                    <Logo width="150px" />
                </Box>
                <IconButton onClick={handleLogout}>
                    <LogoutIcon fontSize="small" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
