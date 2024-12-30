import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import LandingPageSignedIn from "./pages/LandingPageSignedIn/LandingPageSignedIn";
import AuthProvider from "./provider/AuthProvider";
import AdminDataTable from "./components/questions/AdminDataTable";
import { Button } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import ButtonPage from "./components/questions/ButtonPage";
import QuestionDetailModal from "./components/questions/QuestionDetailModal";
import CreateQuestionModal from "./components/questions/CreateQuestionModal";
import QuestionPage from "./pages/QuestionPage";
import QuestionSection from "./components/questions/QuestionSection";

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

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
          onClick={() => handleView(params.row)}
          sx = {{backgroundColor: 'red'}}
        >
          Delete
        </Button>
      ),
    },
  ];
  
  const rows = [
    { id: 1, questions: "What is React?" },
    { id: 2, questions: "How does React work?" },
    { id: 3, questions: "What is a state in React?" },
    { id: 4, questions: "Explain useState hook." },
    { id: 5, questions: "What are props in React?" },
    { id: 6, questions: "What are props in React?" },
    { id: 7, questions: "What are props in React?" },
    { id: 8, questions: "What are props in React?" },
    { id: 9, questions: "What are props in React?" },
    { id: 10, questions: "What are props in React?" },
  ];


  const handleView = (row: { id: number; questions: string }) => {
    console.log(`Viewing row with ID: ${row.id}`);
    // Implement additional logic to handle the view action here
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LandingPage />
      ),
    },
    {
      path: "/button",
      element: (
        <ButtonPage />
      ),
    },
    {
      path: "/signed-in",
      element: (
        <LandingPageSignedIn />
      ),
    },
    {
      path: "/admin",
      element: (
        <AdminPage />
      ),
    },
    { path: "/admin/question", element: (<QuestionPage />), },

  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );  
}