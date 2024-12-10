import { CreateEventSchemaFormData } from "../../../schema/formValidation/createEventSchema";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import { Control, Controller, FieldErrors } from "react-hook-form";

const EventDateTimeField: React.FC<{
    control: Control<CreateEventSchemaFormData>;
    errors: FieldErrors<CreateEventSchemaFormData>;
  }> = ({ control, errors }) => (
    <Controller
      name="dateTime"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <DateTimePicker
            label="Date & Time"
            value={field.value ? dayjs(field.value) : null}
            onChange={(newValue) => field.onChange(newValue?.toISOString())}
            slotProps={{
              textField: {
                fullWidth: true,
                margin: 'normal',
                error: !!errors.dateTime,
                helperText: errors.dateTime?.message,
              },
            }}
          />
      )}
    />
  )
  export default EventDateTimeField;