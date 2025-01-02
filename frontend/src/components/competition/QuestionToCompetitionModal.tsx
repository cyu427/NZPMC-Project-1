import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { GridRenderCellParams } from '@mui/x-data-grid';
import AdminDataTable from '../questions/AdminDataTable';
import { useGetAllQuestions } from '../../queries/questions/useGetAllQuestions';
import { useAddQuestionToCompetition } from '../../queries/competition/useAddQuestionToCompetition';

interface QuestionToCompetitionModalProps {
  onClose: () => void; // Prop to handle closing the modal
  competitionId: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },


}));
const QuestionToCompetitionModal: React.FC<QuestionToCompetitionModalProps> = ({ onClose, competitionId  }) => {

    const { data, error, isLoading, refetch } = useGetAllQuestions();
    const { mutate } = useAddQuestionToCompetition();
    const [isAddQuestionModalOpen, setIsAddCompetitionModalOpen] = useState(false);

  const columns = [
    { field: 'title', headerName: 'Questions', width: 500 },
    {
      field: 'details',
      headerName: 'View',
      width: 125,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleView(params.row)}
        >
          View
        </Button>
      ),
    },
    {
      field: 'add',
      headerName: 'Add',
      width: 125,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddToCompetition(params.row.id)}
        >
          Add
        </Button>
      ),
    },
];

  const handleView = (row: { id: number; questions: string }) => {
    console.log(`Viewing row with ID: ${row.id}`);
    // Implement additional logic to handle the view action here
  };

  const handleAddToCompetition = ( id: string ) => {
    mutate({competitionId: competitionId, questionId: id});
  };

  const handleCloseAddQuestion = () => {
    setIsAddCompetitionModalOpen(false);
}

  // useEffect(() => {
  //   console.log("Modal Question Id: " + questionId);
  // }, [questionId]); 


  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={true}
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Add Question to Competition
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
        <AdminDataTable rows={data} columns={columns} height={630} width={750} />
      </DialogContent>
    </BootstrapDialog>
    
  );
};

export default QuestionToCompetitionModal;
