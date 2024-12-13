import React from 'react';
import { Box } from '@mui/material';
import DataTableWithSearch from '../table/DataTableWithSearch';
import { AccountWithId } from '../../schema/apiDataValidation/newAccountSchema';

export function EventParticipants({data}:{ data : AccountWithId[] }) {
  return (
    <Box sx={{ width: '100%' }}>
      <DataTableWithSearch data={data} />
    </Box>
  );
}

