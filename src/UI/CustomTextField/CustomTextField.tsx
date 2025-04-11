import { TextField, TextFieldProps } from "@mui/material";
interface CustomTextFieldProps extends Omit<TextFieldProps, 'variant'> {
  placeholder?: string,
  height?:number,
  maxWidth?:number,
  textArea?:number,
  label?:string,
  errorMessage?:string
}
function CustomTextField({placeholder, maxWidth, textArea, label, errorMessage, ...inputProps}:CustomTextFieldProps) {
  return (
    <TextField
      {...inputProps}
      error={!!errorMessage}
      helperText={errorMessage}
      label={label}
      variant="standard" // Removes outline & underline
      placeholder={placeholder}
      multiline={textArea ? true : false}
      minRows={textArea ?? undefined}
      maxRows={textArea ?? undefined}
      slotProps={{
        input:{
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
        }
      }}
      sx={{ width: "100%", maxWidth }} // Optional width setting
    />
  );
}

export default CustomTextField;