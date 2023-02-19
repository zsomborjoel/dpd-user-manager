// eslint-disable-next-line import/no-extraneous-dependencies
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { FC, useContext, useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import { User } from '../../models/User';
import LoadingIndicator from '../../components/LoadingIndicator';
import UserService from '../../services/UserService';
import { SnackbarContext } from '../../contexts/snackbar/SnackbarContext';

const UserTablePage: FC = () => {
    const [users, setUsers] = useState<User[]>();
    const [changedUsers, setChangedUsers] = useState<User[]>([]);

    const { showSnackbar } = useContext(SnackbarContext);

    useEffect(() => {
        UserService.getAll().then(setUsers);
        setChangedUsers([]); // TODO handle user changes in table
    }, []);

    const saveUser = (): Promise<void> =>
        UserService.saveAll(changedUsers)
            .then(() => showSnackbar({ severity: 'success', text: 'Sikeresen mentve!' }))
            .catch(() => showSnackbar({ severity: 'error', text: 'Hiba történt!' }));

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 250 },
        {
            field: 'email',
            headerName: 'Email cím*',
            width: 200,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Vezetéknév*',
            width: 200,
            editable: true,
        },
        {
            field: 'firstName',
            headerName: 'Keresztnév*',
            width: 200,
            editable: true,
        },
        {
            field: 'dateOfBirth',
            headerName: 'Születési dátum',
            width: 200,
        },
        {
            field: 'placeOfBirth',
            headerName: 'Születési hely',
            width: 200,
        },
        {
            field: 'mothersName',
            headerName: 'Anyja születési neve*',
            width: 200,
            editable: true,
        },
        {
            field: 'socialSecurityNumber',
            headerName: 'TAJ szám*',
            width: 160,
            editable: true,
        },
        {
            field: 'taxId',
            headerName: 'Adóazonosító jel*',
            width: 160,
            editable: true,
        },
    ];

    if (users === undefined) {
        return <LoadingIndicator loading />;
    }

    return (
        <Box sx={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[50]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            <Grid container spacing={1}>
                <Grid item xs={6} display="flex" sx={{ m: 2 }}>
                    <Button sx={{ width: 140 }} variant="contained" onClick={saveUser}>
                        Mentés
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UserTablePage;
