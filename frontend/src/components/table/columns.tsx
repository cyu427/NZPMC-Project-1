import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import StandardButton from '../buttons/StandardButton';

const handleViewClick = (id: number) => {
  console.log(`View button clicked for row with id: ${id}`);
  // Add your view logic here
};

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', headerClassName: 'headerColours', width: 70 },
  { field: 'firstName', headerName: 'First name', headerClassName: 'headerColours', width: 157 },
  { field: 'lastName', headerName: 'Last name', headerClassName: 'headerColours', width: 157 },
  { field: 'email', headerName: 'Email', headerClassName: 'headerColours', width: 270 },
  { field: 'homeSchool', headerName: 'Home School', headerClassName: 'headerColours', width: 120 },
  { field: 'school', headerName: 'School', headerClassName: 'headerColours', width: 270 },
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

