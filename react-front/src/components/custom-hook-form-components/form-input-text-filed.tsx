import { Controller } from "react-hook-form";
import { FormInputProps } from "./form-input-props";
import { TextField } from "@mui/material";


export const FormInputTextField = ({ name, control, label,type }: FormInputProps) => {
  return (
    <Controller
      rules={{
        required: "This Field is required!"
      }}
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          type={type}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};