import {Box, Button, Typography, FormControl, Link} from '@mui/material'
import PasswordField from "./../Fields/PasswordField";
import NameField from "./../Fields/NameField";
import EmailField from "./../Fields/EmailField";
import checkValid from "../../utils/checkvalid";

import {useState} from 'react'
import { Link as RouterLink } from 'react-router-dom';
import emailValidator from 'utils/emailValidator';
import passwordValidator from 'utils/passwordValidator';
import nameValidator from 'utils/nameValidator';

export interface SignUpProps {
  handleSignUp: (signUpVars: {
    name: string;
    email: string;
    password: string;
  }) => any;
  textFieldVariant?: "outlined" | "filled" | "standard";
}

const INITIAL = { text: "", error: "" };

function SignUp ({
  handleSignUp,
  textFieldVariant = "filled"
}: SignUpProps) {
  const [name, setName] = useState(INITIAL);
  const [email, setEmail] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState(INITIAL);

  const handleSubmit = async () => {
    if (
      ![
        checkValid(name, setName, nameValidator),
        checkValid(email, setEmail, emailValidator),
        checkValid(password, setPassword, passwordValidator),
      ].every((v) => v)
    )
      return;

    setLoading(true);

    return handleSignUp({
      name: name.text,
      email: email.text,
      password: password.text,
    });
  };

  return (
    <Box p={2}>
        <NameField {...{ name, setName, textFieldVariant, loading }} />
        <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

        <PasswordField
            {...{ password, setPassword, textFieldVariant, loading }}
        />

        <FormControl margin="normal" fullWidth>
            <Button
                style={{ textTransform: "none" }}
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
            >
                Register
            </Button>
        </FormControl>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: "pointer" }}
        >
            <Link component={RouterLink} to="/" underline="hover">
                Go back to Login
            </Link>
        </Typography>
    </Box>
  );
};
export default SignUp;