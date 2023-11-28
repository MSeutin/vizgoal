import TextField from "@mui/material/TextField";

function Input({
  id = "outlined-basic",
  label = "Goal",
  variant = "outlined",
  sx,
  ...rest
}) {
  const defaultSx = {
    color: "blue",
    // ... other default styles
  };

  const mergedSx = { ...defaultSx, ...sx };

  return <TextField label={label} variant={variant} sx={mergedSx} {...rest} />;
}
export default Input;
