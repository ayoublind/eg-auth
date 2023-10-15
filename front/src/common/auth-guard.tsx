import { useEffect, useState } from 'react';

import { Box, Stack } from '@mui/system';
import Logo from 'components/common/Logo';
import AppLoader from 'components/common/AppLoader';

function AuthGuard({ children }: any) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

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
