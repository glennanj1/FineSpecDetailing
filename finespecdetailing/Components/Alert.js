import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%', position: 'fixed', top: 0 }} spacing={2}>
      <Alert onClose={() => {}}>
            Successfully Booked!
      </Alert>
    </Stack>
  );
}