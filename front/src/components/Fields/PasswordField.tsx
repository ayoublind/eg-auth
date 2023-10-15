import {InputAdornment,IconButton, FormHelperText, TextField, FormControl} from '@mui/material'
import HiddenPasswordIcon from "@mui/icons-material/VisibilityOutlined";
import ShownPasswordIcon from "@mui/icons-material/VisibilityOffOutlined";
import LockIcon from "@mui/icons-material/LockOpen";

import {useState, createElement} from 'react'

export interface PasswordFieldProps {
  password: { text: string; error: string };
  setPassword: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

function PasswordField ({
  password,
  setPassword,
  textFieldVariant = "filled",
  loading,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl margin="none" fullWidth error={Boolean(password.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Password" : ""}
        label={textFieldVariant !== "outlined" && "Password"}
        error={Boolean(password.error)}
        variant={textFieldVariant}
        value={password.text}
        disabled={loading}
        onChange={(e) => {
          setPassword({ text: e.target.value, error: "" });
        }}
        type={!showPassword ? "password" : "text"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <LockIcon color={password.error ? "error" : "action"} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password" onClick={tooglePassword}>
                {createElement(
                  !showPassword ? ShownPasswordIcon : HiddenPasswordIcon,
                  {
                    color: password.error ? "error" : "action",
                  }
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{password.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default PasswordField;