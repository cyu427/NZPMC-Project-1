import React from 'react';
import { Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useSearch } from '../../hooks/useSearch';
import { columns } from './columns';
import { SearchInputs } from './SearchInputs';

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
    </Box>
  );
};

export default DataTableWithSearch;