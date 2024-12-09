import { Control, Controller, FieldErrors } from "react-hook-form";
import { CreateEventSchemaFormData } from "../../../schema/createEventSchema";
import { TextField } from "@mui/material";

const EventCostField: React.FC<{
    control: Control<CreateEventSchemaFormData>;
    errors: FieldErrors<CreateEventSchemaFormData>;
  }> = ({ control, errors }) => (
    <Controller
      name="cost"
      control={control}
      defaultValue={0.00}
      render={({ field: { onChange, ...field } }) => (
        <TextField
          {...field}
          type="number"
          label="Cost"
          fullWidth
          margin="normal"
          InputProps={{
            inputProps: {
            step: "0.01",  // Allow two decimal places
            min: "0" }      // Prevent negative numbers
          }}
          onChange={(e) => {
            const value = parseFloat(parseFloat(e.target.value).toFixed(2));
            onChange(value);
          }}
          error={!!errors.cost}
          helperText={errors.cost?.message}
        />
      )}
    />
  )

export default EventCostField;