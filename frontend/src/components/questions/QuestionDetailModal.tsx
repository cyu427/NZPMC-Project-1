import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AdminDataTable from './AdminDataTable';

interface QuestionDetailModalProps {
  onClose: () => void; // Prop to handle closing the modal
  questionId: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({ onClose, questionId }) => {

  const data = {
    "question": "What is the capital of New Zealand?",
    "options": [
      {
        "id": 1,
        "text": "Wellington",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "Auckland",
        "isCorrect": false
      },
      {
        "id": 3,
        "text": "Christchurch",
        "isCorrect": false
      },
      {
        "id": 4,
        "text": "Dunedin",
        "isCorrect": false
      }
    ]
  }

  const columns = [
    { field: 'text', headerName: 'Options', width: 350 },
    { field: 'isCorrect', headerName: 'True/False', width: 100 },
    
  ];

  const handleView = (row: { id: number; questions: string }) => {
    console.log(`Viewing row with ID: ${row.id}`);
    // Implement additional logic to handle the view action here
  };

  const handleClickOpen = (): void => {
    console.log('Delete Question button clicked');
  };

  useEffect(() => {
    console.log("Modal Question Id: " + questionId);
  }, [questionId]); 


  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {data.question}
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
      <DialogContent dividers>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px',}}>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ width: '45%'}} >
                Edit Questions
            </Button>
            <Button variant="outlined" onClick={handleClickOpen} sx={{ width: '45%'}} >
                Add to Event
            </Button>
        </div>
        <AdminDataTable rows={data.options} columns={columns} height={317} width={490} />
        <Button variant="outlined" color='error' onClick={handleClickOpen} sx={{ marginTop: '20px', width: '100%'}}>
            Delete Question
        </Button>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default QuestionDetailModal;
