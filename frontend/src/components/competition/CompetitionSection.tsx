import { Box, Button, } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useSearch } from "../../hooks/useSearch";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateQuestionModal from "./CreateCompetitionModal";
import { set } from "zod";
import CreateCompetitionModal from "./CreateCompetitionModal";
import AdminDataTable from "../questions/AdminDataTable";
import { useGetAllCompetitions } from "../../queries/competition/useGetAllCompetition";
import QuestionToCompetitionModal from "./QuestionToCompetitionModal";

const CompetitionSection: React.FC = () => {
    const [isCreateCompetitionModalOpen, setIsCreateCompetitionModalOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [questionId, setQuestionId] = useState<string>('');
    const location = useLocation();

    const columns = [
        { field: 'title', headerName: 'Competition', width: 950 },
        {
          field: 'details',
          headerName: 'Details',
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
              onClick={() => handleDelete(params.row)}
              sx = {{backgroundColor: 'red'}}
            >
              Delete
            </Button>
          ),
        },
    ];
    
    const { data, error, isLoading, refetch } = useGetAllCompetitions();
    
    // const rows = [
    //     { id: "1", title: "Competition 1" },
    //     { id: "2", title: "How does React work?" },
    //     { id: "3", title: "What is a state in React?" },
    //     { id: "4", title: "Explain useState hook." },
    //     { id: "5", title: "What are props in React?" },
    //     { id: "6", title: "What are props in React?" },
    //     { id: "7", title: "What are props in React?" },
    //     { id: "8", title: "What are props in React?" },
    //     { id: "9", title: "What are props in React?" },
    //     { id: "10", title: "What are props in React?" },
    //   ];


      useEffect(() => {
        if (!isCreateCompetitionModalOpen) {
          console.log("isCreateCompetitionModalOpen is set to false");
          setTimeout(() => {
            refetch();
          }, 100);
        }
      }, [isCreateCompetitionModalOpen, location.pathname]);
      
      useEffect(() => {
        if (!isViewOpen) {
          console.log("isViewOpen is set to false");
        }
      }, [isViewOpen, location.pathname]);

    const navigate = useNavigate(); 

    const handleDelete = (row: { id: number }) => {
        console.log('Delete Question button clicked');
        navigate('/button');
    }

    const handleAddCompetition = () => {
        setIsCreateCompetitionModalOpen(true);
    }

    const handleCloseCompetition = () => {
        setIsCreateCompetitionModalOpen(false);
    }

    const handleView = (row: { id: string }) => {
        console.log(`Viewing row with ID: ${row.id}`);
        navigate(`/admin/competition/${row.id}`);
        // Implement additional logic to handle the view action here
    };

    const handleCloseViewModal = () => {
        setIsViewOpen(false);
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '1200px', marginBottom: '20px' }}>
            <Button variant="contained" color="primary" onClick={() => handleAddCompetition()}> Add Competition </Button>
        </div>

        {isCreateCompetitionModalOpen && <CreateCompetitionModal onClose={handleCloseCompetition} />}
        {/* {isViewOpen && <QuestionDetailModal onClose={handleCloseViewModal} questionId={questionId} />} */}

        <AdminDataTable columns={columns} rows={data} height={630} width={1200}/>
    </div>
  );
};

export default CompetitionSection;

