import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PageRoutes from './layout/PageRoutes';
import MainLayout from './layout/MainLayout';
import SnackbarContextProvider from './contexts/snackbar/SnackbarContext';

const App: FC = () => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SnackbarContextProvider>
            <MainLayout>
                <PageRoutes />
            </MainLayout>
        </SnackbarContextProvider>
    </LocalizationProvider>
);

export default App;
