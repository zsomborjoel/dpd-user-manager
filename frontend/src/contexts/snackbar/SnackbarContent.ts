import { AlertColor } from '@mui/material';

export interface SnackbarContent {
    isOpen: boolean;
    severity: AlertColor;
    text: string;
}
