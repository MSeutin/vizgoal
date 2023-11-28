import { Button as MuiButton } from "@mui/material";

function Button({ children, color, variant, onClick, sx, ...rest }) {
  const defaultSx = {
    color: "#3f51b5",
    ":hover": {
      color: "#f2f2f2",
      backgroundColor: "#3f51b5",
    },
  };

  const mergedSx = { ...defaultSx, ...sx };
  return (
    <MuiButton
      color={color}
      variant={variant}
      onClick={onClick}
      sx={mergedSx}
      {...rest}
    >
      {children}
    </MuiButton>
  );
}
export default Button;
