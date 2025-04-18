// import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { TextField } from "@mui/material";
interface CustomDateTimePickerProps extends Omit<DateTimePickerProps<Dayjs>, 'value'> {
  errorMessage?:string;
  value?:string | null;
  // onChange?:(val:string | null) => void
}
const CustomDateTimePicker = ({errorMessage, value, ...inputProps}:CustomDateTimePickerProps) => {
    // const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                {...inputProps}
                value={value ? dayjs(value) : null}
                slots={{ textField: TextField }} // Custom input component
                slotProps={{
                  textField: {
                    error: !!errorMessage,
                    helperText: errorMessage,
                    variant: "standard",
                    InputProps: {
                      disableUnderline: true,
                      sx: {
                        border: "1px solid #ccc",
                        borderRadius: "12px",
                        paddingX: 2,
                        paddingY: 1,
                        "&:hover": {
                          borderColor: "#888",
                        },
                        "&:focus-within": {
                          borderColor: "var(--primary-color)",
                        },
                      },
                    }
                  },
                  desktopPaper: {
                    sx: {
                      borderRadius: "12px",
                      border: "1px solid var(--primary-color)",
                      backgroundColor: "white",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    },
                  },
                  popper: {
                    sx: {
                      "& .MuiButtonBase-root, & .MuiPickersYear-yearButton": {
                        color: "var(--primary-color)", // Change day text color
                      },
                      "& .Mui-selected": {
                        backgroundColor: "var(--primary-color) !important", // Selected date background
                        color: "white", // Selected text color
                      },
                      "& .MuiButtonBase-root:hover, .MuiPickersYear-yearButton:hover": {
                        backgroundColor: "var(--white-gray)", // Hover effect
                      },
                      "& .MuiTypography-root": {
                        color: "var(--primary-color)", // Apply primary color to text
                      },
                      "& .MuiClockPointer-thumb": {
                        borderColor: "var(--primary-color)", // Clock pointer thumb
                      },
                    },
                  },
                  
                }}
            />
        </LocalizationProvider>
      </>
    )
}
export default CustomDateTimePicker