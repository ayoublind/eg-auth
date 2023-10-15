import {Box, Button, Link, Typography, FormControl} from '@mui/material'
import EmailField from "./../Fields/EmailField";
import PasswordField from "./../Fields/PasswordField";
import checkValid from "../../utils/checkvalid";

import {useState} from 'react'
import { Link as RouterLink } from 'react-router-dom';
import emailValidator from 'utils/emailValidator';
import passwordValidator from 'utils/passwordValidator';

type InitialType = { text: string; error: string };

export interface SignInProps {
  handleSignIn: (signInVars: { email: string; password: string }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
}

const INITIAL: InitialType = { text: "", error: "" };

function SignIn({
  handleSignIn,
  textFieldVariant = "filled"
}:SignInProps) {
  const [email, setEmail] = useState<InitialType>(INITIAL);
  const [password, setPassword] = useState(INITIAL);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (
      ![
        checkValid(email, setEmail, emailValidator),
        checkValid(password, setPassword, passwordValidator),
      ].every((v) => v)
    )
      return;
    setLoading(true);
    
    await handleSignIn({ email: email.text, password: password.text });
    setLoading(false);
  };

  return (
    <Box p={2}>
        <EmailField {...{ email, setEmail, textFieldVariant, loading }} />
        <PasswordField
            {...{ password, setPassword, textFieldVariant, loading }}
        />

        <FormControl margin="normal" fullWidth>
            <Button
                onClick={handleSubmit}
                style={{ textTransform: "none" }}
                size="large"
                disabled={loading}
                variant="contained"
                color="primary"
                fullWidth
            >
                Sign In
            </Button>
        </FormControl>

        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: "pointer" }}
        >
            <Link component={RouterLink} to="/signup" underline="hover">
                No Account? Create Now
            </Link>
        </Typography>
    </Box>
  );
};
export default SignIn;