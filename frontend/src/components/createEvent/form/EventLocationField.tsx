import { TextField } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { CreateEventSchemaFormData } from "../../../schema/formValidation/createEventSchema";

const EventLocationField: React.FC<{
    control: Control<CreateEventSchemaFormData>;
    errors: FieldErrors<CreateEventSchemaFormData>;
  }> = ({ control, errors }) => (
    <Controller
      name="location"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Location"
          fullWidth
          margin="normal"
          error={!!errors.location}
          helperText={errors.location?.message}
        />
      )}
    />
  )

  export default EventLocationField;