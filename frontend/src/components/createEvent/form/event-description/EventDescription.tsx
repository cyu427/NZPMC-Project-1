import React from "react";
import ReactQuill from "react-quill";
import { Control, Controller, FieldErrors } from "react-hook-form";

import "react-quill/dist/quill.snow.css";
import { modules, formats } from "./toolbar";
import { CreateEventSchemaFormData } from "../../../../schema/createEventSchema";

const EventDescriptionField: React.FC<{
  control: Control<CreateEventSchemaFormData>;
  errors: FieldErrors<CreateEventSchemaFormData>;
}> = ({ control, errors }) => (
  <Controller
    name="description"
    control={control}
    defaultValue=""
    render={({ field }) => (
      <div>
        <label htmlFor="description">Description</label>
        <ReactQuill
          id="description"
          theme="snow"
          value={field.value || ""}
          onChange={field.onChange}
          modules={modules}
          formats={formats}
          style={{ height: "200px", marginBottom: "8px" }}
        />
        {errors.description && (
          <p style={{ color: "red", fontSize: "0.875rem" }}>
            {errors.description.message}
          </p>
        )}
      </div>
    )}
  />
);

export default EventDescriptionField;
