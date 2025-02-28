import { TextField } from "@mui/material";

function CustomTextField() {
  return (
    <TextField
      variant="standard" // Removes outline & underline
      placeholder="Enter text"
      InputProps={{
        disableUnderline: true, // Ensures no underline
        sx: {
          border: "1px solid #ccc", // Light gray border
          borderRadius: "12px", // Rounded edges
          paddingX: 2, // Horizontal padding
          paddingY: 1, // Vertical padding
          "&:hover": {
            borderColor: "#888", // Darker border on hover
          },
          "&:focus-within": {
            borderColor: "var(--primary-color)", // Change border color when focused
          },
        },
      }}
      sx={{ width: "100%", maxWidth: 200 }} // Optional width setting
    />
  );
}

export default CustomTextField;