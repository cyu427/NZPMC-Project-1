import React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createQuestionSchema } from '../../schema/formValidation/questionSchema';
import { Button, TextField } from '@mui/material';
import { CreateCompetitionFormData, createCompetitionSchema } from '../../schema/formValidation/competitionSchema';
import { useCreateCompetiton } from '../../queries/competition/useCreateCompetition';

interface CreateCompetitionModalProps {
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

const CreateCompetitionModal: React.FC<CreateCompetitionModalProps> = ({ onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<CreateCompetitionFormData>({
    resolver: zodResolver(createCompetitionSchema),
  });

  const { mutate, isLoading, isError, error, isSuccess } = useCreateCompetiton();

  const onSubmit = (data: CreateCompetitionFormData) => {
    console.log(data);
    mutate(data);
    onClose();
};

  return (
    <BootstrapDialog onClose={onClose} open={true} >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Create Competition
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
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Title"
                error={!!errors.title}
                helperText={errors.title?.message}
                fullWidth
                sx={{ marginBottom: '20px', height: 'auto' }}
              />
            )}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="submit" variant="contained">
              Create Competition
            </Button>
          </div>
        </form>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default CreateCompetitionModal;
