import React, { useState, useCallback } from 'react';
import { Box, Paper } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useSearch } from '../../hooks/useSearch';
import StandardButton from '../buttons/StandardButton';
import JoinedEventDialog from './JoinedEventDialog';
import { SearchInputs } from './SearchInputs';
import { getEventByUser } from '../../queries/event';
import { useQuery } from '@tanstack/react-query';

interface DataTableWithSearchProps {
  data: Array<{
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    homeSchool: string;
    school: string;
  }>;
}

const PAGINATION_MODEL = { page: 0, pageSize: 5 };
const DATA_GRID_SX = { 
  border: 0,
  '& .headerColours': {
    backgroundColor: '#285DE5',
    color: 'white',
    fontSize: 16,
  }  
};

const DataTableWithSearch: React.FC<DataTableWithSearchProps> = ({ data }) => {
  const { searchTerm, setSearchTerm, searchField, setSearchField, filteredRows } = useSearch(data);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: selectedEvents } = useQuery<Event[], Error>({
    queryKey: ['userEvents', selectedUserId],
    queryFn: () => getEventByUser(selectedUserId!),
    enabled: !!selectedUserId
  });

  const handleViewClick = useCallback((id: string) => {
    setSelectedUserId(id);
    setDialogOpen(true);
  }, []);

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedUserId(null);
  };

  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First name', headerClassName: 'headerColours', width: 190 },
    { field: 'lastName', headerName: 'Last name', headerClassName: 'headerColours', width: 195 },
    { field: 'email', headerName: 'Email', headerClassName: 'headerColours', width: 270 },
    { field: 'homeSchool', headerName: 'Home School', headerClassName: 'headerColours', width: 120 },
    { field: 'school', headerName: 'School', headerClassName: 'headerColours', width: 270 },
    { 
      field: 'view', 
      headerName: 'Joined Events', 
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

  return (
    <Box>
      <SearchInputs
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchField={searchField}
        setSearchField={setSearchField}
      />
      <Paper sx={{ height: 400, width: '1200px'}}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel: PAGINATION_MODEL } }}
          pageSizeOptions={[5, 10]}
          sx={DATA_GRID_SX}
        />
      </Paper>
      <JoinedEventDialog
        events={selectedEvents || []}
        title="Joined Events"
        open={dialogOpen}
        onClose={handleCloseDialog}
      />
    </Box>
  );
};

export default DataTableWithSearch;


