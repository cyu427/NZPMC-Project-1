import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import StandardButton from './buttons/StandardButton';

const handleViewClick = (id: number) => {
    console.log(`View button clicked for row with id: ${id}`);
    // Add your view logic here
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', headerClassName: 'headerColours', width: 70, },
    { field: 'firstName', headerName: 'First name', headerClassName: 'headerColours', width: 140 },
    { field: 'lastName', headerName: 'Last name', headerClassName: 'headerColours',width: 140 },
    { field: 'email', headerName: 'Email', headerClassName: 'headerColours', width: 250 },
    { field: 'homeSchool', headerName: 'Home School', headerClassName: 'headerColours', width: 120 },
    { field: 'school', headerName: 'School', headerClassName: 'headerColours', width: 250 },
    { 
        field: 'view', 
        headerName: 'View', 
        headerClassName: 'headerColours',
        width: 155,
        renderCell: (params: GridRenderCellParams) => (
            <StandardButton
                label="View"
                buttonColor="yellow"
                onClick={() => handleViewClick(params.row.id)}
            />
        ),
    },
  ];


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: "123@gmail.com", homeSchool: "Yes", school: "None" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "cedricyu3717@hotmail.com", homeSchool: "No", school: "Westlake Boys High School" },
    { id: 3, lastName: 'Doe', firstName: 'Jon', email: "123@gmail.com", homeSchool: "Yes", school: "Samuel Marsden Collegiate School" }
  ];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '1125px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0,
            '& .headerColours': {
                backgroundColor: '#285DE5',
                color: 'white',
                fontSize: 16,
            }  
         }}
      />
    </Paper>
  );
}