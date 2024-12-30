import { Box, Button, } from "@mui/material";
import AdminDataTable from "./AdminDataTable";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useSearch } from "../../hooks/useSearch";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateQuestionModal from "./CreateQuestionModal";
import { set } from "zod";
import QuestionDetailModal from "./QuestionDetailModal";

const QuestionSection: React.FC = () => {
    const [isCreateQuestionModalOpen, setIsCreateQuestionModalOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [questionId, setQuestionId] = useState<string>('');
    const location = useLocation();

    const columns = [
        { field: 'questions', headerName: 'Questions', width: 950 },
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
          field: 'delete',
          headerName: 'Delete',
          width: 125,
          renderCell: (params: GridRenderCellParams) => (
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDelete()}
              sx = {{backgroundColor: 'red'}}
            >
              Delete
            </Button>
          ),
        },
    ];
    
    const rows = [
        { id: "1", questions: "What is React?" },
        { id: "2", questions: "How does React work?" },
        { id: "3", questions: "What is a state in React?" },
        { id: "4", questions: "Explain useState hook." },
        { id: "5", questions: "What are props in React?" },
        { id: "6", questions: "What are props in React?" },
        { id: "7", questions: "What are props in React?" },
        { id: "8", questions: "What are props in React?" },
        { id: "9", questions: "What are props in React?" },
        { id: "10", questions: "What are props in React?" },
      ];


      useEffect(() => {
        if (!isCreateQuestionModalOpen) {
          console.log("isCreateQuestionModalOpen is set to false");
        }
      }, [isCreateQuestionModalOpen, location.pathname]);
      
      useEffect(() => {
        if (!isViewOpen) {
          console.log("isViewOpen is set to false");
        }
      }, [isViewOpen, location.pathname]);

    const navigate = useNavigate(); 

    const handleDelete = () => {
        console.log('Delete Question button clicked');
        navigate('/button');
    }

    const handleAddQuestion = () => {
        setIsCreateQuestionModalOpen(true);
    }

    const handleCloseAddQuestionModal = () => {
        setIsCreateQuestionModalOpen(false);
    }

    const handleView = (row: { id: number }) => {
        console.log(`Viewing row with ID: ${row.id}`);
        setQuestionId(row.id);
        setIsViewOpen(true);
        // Implement additional logic to handle the view action here
    };

    const handleCloseViewModal = () => {
        setIsViewOpen(false);
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '1200px', marginBottom: '20px' }}>
            <Button variant="contained" color="primary" onClick={() => handleAddQuestion()}> Add Question </Button>
        </div>

        {isCreateQuestionModalOpen && <CreateQuestionModal onClose={handleCloseAddQuestionModal} />}
        {isViewOpen && <QuestionDetailModal onClose={handleCloseViewModal} questionId={questionId} />}

        <AdminDataTable columns={columns} rows={rows} height={630} width={1200}/>
    </div>
  );
};

export default QuestionSection;

