import { Grid, Box} from '@mui/material';

import AuthWrapper from 'components/auth/AuthWrapper';
import SignUpForm from 'components/SignUp/SignUpForm';
import Logo from 'components/common/Logo';
import { useDispatch } from 'react-redux';
import AuthService from 'services/authService';
import { useState } from 'react';
import useDocumentTitle from 'hooks/useDocumentTitle';
import { userInfos, userLogging } from 'store/slices/authSlice';

function SignUpPage(props:any) {
    useDocumentTitle(props.title || 'Sign UP Page');
    const dispatch = useDispatch();
    const [errors, setErrors] = useState('');

    const handleSignUp = async (body: any) => {
        const {name, email, password} = body;
        if(name === '' || email === '' || password === '') return setErrors('Please fill all fields')
        const authService = new AuthService();
        const requestLogin = await authService.userSignUp(name,email, password)
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

    return (
        <AuthWrapper sxCard={{ maxWidth: { xs: 470, lg: 550 } }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                        <Logo width="200px" />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <SignUpForm handleSignUp={handleSignUp}/>
                </Grid>
                {/* error */}
                {errors &&(<Grid item xs={12}>
                    {errors}
                </Grid>)}
            </Grid>
        </AuthWrapper>
    );
}

export default SignUpPage;
