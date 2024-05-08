import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { FC } from 'react'

export const MyInput: FC<TextFieldProps> = ({
  helperText,
  label,
  value,
  onChange,
  variant = 'outlined',
  required,
  fullWidth = true,
  type,
  ...rest
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
        required={required}
        label={label}
        variant={variant}
        aria-describedby="my-helper-text"
        value={value}
        onChange={onChange}
        type={type}
        fullWidth={fullWidth}
        {...rest}
      />
      <FormHelperText id="my-helper-text" error>
        {helperText}
      </FormHelperText>
    </FormControl>
  )
}
