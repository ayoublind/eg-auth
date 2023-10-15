import { Container, styled, Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const MainWrapper = styled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%'
}));

const PageWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',

    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
        paddingTop: 70
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: '64px'
    }
}));

function MainLayout() {

    return (
        <MainWrapper>
            <Header
                sx={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 7px 30px 0px rgb(90 114 123 / 11%)'
                }}
            />

            <PageWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        paddingTop: '20px',
                        paddingLeft: '310px!important'
                    }}
                >
                    <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
                        <Outlet />
                    </Box>
                    <Footer />
                </Container>
            </PageWrapper>
        </MainWrapper>
    );
}

export default MainLayout;
