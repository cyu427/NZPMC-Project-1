import React from 'react';
import { Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSearch } from '../../hooks/useSearch';
import { columns } from './columns';
import { SearchInputs } from './SearchInputs';
import { Row } from '../../schema/formValidation/tableDataSchema';

const initialRows: Row[] = [
  { id: 1, lastName: 'Boe', firstName: 'Jon', email: "123@gmail.com", homeSchool: "Yes", school: "None" },
  { id: 2, lastName: 'Yu', firstName: 'Cedric', email: "cedricyu3717@hotmail.com", homeSchool: "No", school: "Westlake Boys High School" },
  { id: 3, lastName: 'Doe', firstName: 'Jon', email: "123@gmail.com", homeSchool: "Yes", school: "Samuel Marsden Collegiate School" }
];

const PAGINATION_MODEL = { page: 0, pageSize: 5 };
const DATA_GRID_SX = { 
  border: 0,
  '& .headerColours': {
    backgroundColor: '#285DE5',
    color: 'white',
    fontSize: 16,
  }  
};

const DataTableWithSearch: React.FC = () => {
  const { searchTerm, setSearchTerm, searchField, setSearchField, filteredRows } = useSearch(initialRows);

  return (
    <Box>
      <SearchInputs
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchField={searchField}
        setSearchField={setSearchField}
      />
      
      <Paper sx={{ height: 400, width: '1125px' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel: PAGINATION_MODEL } }}
          pageSizeOptions={[5, 10]}
          sx={DATA_GRID_SX}
        />
      </Paper>
    </Box>
  );
};

export default DataTableWithSearch;

