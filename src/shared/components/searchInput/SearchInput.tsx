import {
  FormControl,
  FormHelperText,
  IconButton,
  InputBase,
  Paper,
  TextFieldProps,
} from "@mui/material";
import SearchIcon from"../../../assets/search.svg"
import { FC } from "react";
import classes from "./SearchInput.module.css";

export const SearchInput: FC<TextFieldProps> = ({
  helperText,
  // label,
  value,
  onChange,
  // variant = "outlined",
  className,
  required,
  type,
  // ...rest
}) => {
  return (
      <FormControl className={`${className} ${classes.root}`}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 280 }}
        >
          <IconButton sx={{ p: '8px' }} aria-label="menu" className={classes.reactIcon}>
            <img src={SearchIcon} alt="Search Icon" />
          </IconButton>
          <InputBase
            required={required}
            // label={label}
            // variant={variant}
            aria-describedby="my-helper-text"
            value={value}
            onChange={onChange}
            type={type}
            // {...rest}
          />
          <FormHelperText id="my-helper-text" error>
            {helperText}
          </FormHelperText>
        </Paper>
      </FormControl>
  );
};
