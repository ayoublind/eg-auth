import { Fragment, useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

import AuthWrapper from 'components/auth/AuthWrapper';
import SignInForm from 'components/SignIn/SignInForm';
import useDocumentTitle from 'hooks/useDocumentTitle';
import Logo from 'components/common/Logo';
import { userInfos, userLogging } from 'store/slices/authSlice';
import AuthService from 'services/authService';

function SignInPage(props: any) {
    useDocumentTitle(props.title || 'Sign In Page');
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');

    const handleSignIn = async (body: any) => {
        const {email, password} = body;
        if(email === '' || password === '') return setErrors('Please fill all fields')
        const authService = new AuthService();
        const requestLogin = await authService.userLogin(email, password)
        if(requestLogin && !requestLogin.error) {
            const userInfo = requestLogin.data.user
            localStorage.setItem("token", requestLogin.data.access_token);
            localStorage.setItem("sessionId", userInfo.sub);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            
            dispatch(userInfos(userInfo));
            dispatch(userLogging());
        }else{
            console.log('Error')
            setErrors(requestLogin?.error)
        }
    }

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <Fragment>
            <AuthWrapper>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                            <Logo width="200px" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <SignInForm handleSignIn={handleSignIn} />
                    </Grid>
                    {/* error */}
                    {errors &&(<Grid item xs={12}>
                        {errors}
                    </Grid>)}
                </Grid>
            </AuthWrapper>
        </Fragment>
    );
}

export default SignInPage;
