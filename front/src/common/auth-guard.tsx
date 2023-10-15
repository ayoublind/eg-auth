import { useCallback, useEffect, useState } from 'react';

import { Box, Stack } from '@mui/system';
import Logo from 'components/common/Logo';
import AppLoader from 'components/common/AppLoader';
import { useAppDispatch } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLoggingOut } from 'store/slices/authSlice';
import AuthService from 'services/authService';

function AuthGuard({ children }: any) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const { isLoggedIn } = useSelector((state: any) => state.auth);

    const fetchUser = useCallback(async () => {
        try {
            const authService = new AuthService();
            const token=  localStorage.getItem('token')
            if(!token){
                localStorage.clear();
                dispatch(userLoggingOut());
                navigate('/', { replace: true });
                setLoading(false);
                return
            }
            const response = await authService.userProfile(token)

            if (response.data && response.data.email) {
                localStorage.setItem("sessionId", response.data.sub);
            }else{
                localStorage.clear();
                dispatch(userLoggingOut());
                navigate('/', { replace: true });
            }
        } catch (error) {
            console.log('errors :', error);
            navigate('/', { replace: true });
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            localStorage.clear();
            dispatch(userLoggingOut());
            navigate('/', { replace: true });
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);


    if (loading)
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Stack spacing={5} direction="column">
                    <Logo width={'250px'} />
                    <AppLoader />
                </Stack>
            </Box>
        );

    return children;
}

export default AuthGuard;
