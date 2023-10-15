import {FormHelperText, TextField, InputAdornment, FormControl} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

export interface EmailFieldProps {
  email: { text: string; error: string };
  setEmail: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

function EmailField ({
  email,
  setEmail,
  textFieldVariant = "filled",
  loading,
}: EmailFieldProps) {
  return (
    <FormControl margin="none" fullWidth error={Boolean(email.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Email" : ""}
        label={textFieldVariant !== "outlined" && "Email"}
        error={Boolean(email.error)}
        variant={textFieldVariant}
        value={email.text}
        disabled={loading}
        onChange={(e:any) => {
          setEmail({ text: e.target.value, error: "" });
        }}
        type={"email"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <EmailIcon color={email.error ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{email.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default EmailField;