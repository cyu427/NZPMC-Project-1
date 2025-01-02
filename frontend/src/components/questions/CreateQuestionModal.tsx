import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateQuestionFormData, createQuestionSchema } from '../../schema/formValidation/questionSchema';
import { Button, TextField, MenuItem, Select, FormHelperText } from '@mui/material';
import { createQuestionMapping } from '../../utils/CreateQuestionMapper';
import { useCreateQuestion } from '../../queries/questions/useCreateQuestion';

interface CreateQuestionModalProps {
    onClose: () => void; // Prop to handle closing the modal
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    width: '600px',
  },
}));

type FormFieldNames = 'question' | 'option1' | 'option2' | 'option3' | 'option4' | 'answer1' | 'answer2' | 'answer3' | 'answer4';

const CreateQuestionModal: React.FC<CreateQuestionModalProps> = ({ onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<CreateQuestionFormData>({
    resolver: zodResolver(createQuestionSchema),
  });

  const { mutate, isLoading, isError, error, isSuccess } = useCreateQuestion();

  const onSubmit = (data: CreateQuestionFormData) => {
    const questionToCreate = createQuestionMapping(data);
    console.log(questionToCreate);
    mutate(questionToCreate);
    onClose();
};

  return (
    <BootstrapDialog onClose={onClose} open={true} >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Create Question
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="question"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Question"
                error={!!errors.question}
                helperText={errors.question?.message}
                fullWidth
                multiline
                rows={3}
                sx={{ marginBottom: '20px', height: 'auto' }}
              />
            )}
          />

          {[...Array(4)].map((_, index) => {
            const optionName: FormFieldNames = `option${index + 1}` as FormFieldNames;
            const answerName: FormFieldNames = `answer${index + 1}` as FormFieldNames;

            return (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', alignItems: 'flex-start' }}>
                <Controller
                    name={optionName}
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <div style={{ width: '70%', height: '56px' }}>  
                            <TextField
                                {...field}
                                label={`Option ${index + 1}`}
                                error={!!errors[optionName]}
                                fullWidth
                            />
                            {errors[optionName] && (
                                <FormHelperText error>{errors[optionName]?.message}</FormHelperText>
                            )}
                        </div>
                    )}
                />
                <Controller
                  name={answerName}
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Select
                      {...field}
                      value={field.value ? 'Yes' : 'No'}
                      onChange={(e) => field.onChange(e.target.value === 'Yes')}
                      sx={{width: '25%', marginLeft: '10px', height: '56px'}}
                    >
                      <MenuItem value="Yes">Yes</MenuItem>
                      <MenuItem value="No">No</MenuItem>
                    </Select>
                  )}
                />
              </div>
            );
          })}

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained">
              Create Question
            </Button>
          </div>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default CreateQuestionModal;
