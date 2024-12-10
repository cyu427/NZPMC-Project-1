import { TextField } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { CreateEventSchemaFormData } from "../../../schema/formValidation/createEventSchema";

const EventNameField: React.FC<{
    control: Control<CreateEventSchemaFormData>;
    errors: FieldErrors<CreateEventSchemaFormData>;
  }> = ({ control, errors }) => (
    <Controller
      name="eventName"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Event Name"
          fullWidth
          margin="normal"
          error={!!errors.eventName}
          helperText={errors.eventName?.message}
        />
      )}
    />
  )
  export default EventNameField;