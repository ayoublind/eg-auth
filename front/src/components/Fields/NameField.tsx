import {InputAdornment, FormHelperText, TextField, FormControl} from '@mui/material'
import PersonIcon from "@mui/icons-material/AccountBoxOutlined";

export interface NameFieldProps {
  name: { text: string; error: string };
  setName: (props: { text: string; error: string }) => void;
  textFieldVariant?: "outlined" | "filled" | "standard";
  loading: boolean;
}

function NameField ({
  name,
  setName,
  textFieldVariant = "filled",
  loading,
}: NameFieldProps) {
  return (
    <FormControl margin="none" fullWidth error={Boolean(name?.error)}>
      <TextField
        placeholder={textFieldVariant === "outlined" ? "Name" : ""}
        label={textFieldVariant !== "outlined" && "Name"}
        error={Boolean(name?.error)}
        variant={textFieldVariant}
        value={name?.text}
        disabled={loading}
        onChange={(e) => {
          setName({ text: e.target.value, error: "" });
        }}
        type={"name"}
        InputProps={{
          startAdornment: textFieldVariant === "outlined" && (
            <InputAdornment position="start">
              <PersonIcon color={name?.error ? "error" : "action"} />
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText>{name?.error || " "}</FormHelperText>
    </FormControl>
  );
};
export default NameField;