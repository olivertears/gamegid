import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: '#333',
          borderRadius: '10px',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          borderRadius: '10px',
          color: 'white',
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: '24px',
          color: 'white',
          borderRadius: '10px',
          backgroundColor: '#333',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#333',
          borderRadius: '10px',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          margin: '0',
          padding: '0',
          color: 'white',
        },
      },
    },
  },
});
