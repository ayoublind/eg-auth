import { Box, Grid, Card, Theme, SxProps, Typography } from '@mui/material';

type AuthWrapperProps = {
    children: string | JSX.Element | JSX.Element[];
    sxCard?: SxProps<Theme> | undefined;
};

function AuthWrapper({ children, sxCard = { maxWidth: { xs: 400, lg: 475 } } }: AuthWrapperProps): JSX.Element {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                sx={{
                    minHeight: '100vh'
                }}
            >
                <Grid item xs={12}>
                    <Grid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ minHeight: { xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                    >
                        <Grid item>
                            <Card
                                sx={{
                                    ...sxCard,
                                    margin: { xs: 2.5, md: 3 },
                                    '& > *': {
                                        flexGrow: 1,
                                        flexBasis: '50%'
                                    }
                                }}
                            >
                                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>{children}</Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                <Typography variant="subtitle1" component="span">
                    Copyright © {new Date().getFullYear()}.
                </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AuthWrapper;
