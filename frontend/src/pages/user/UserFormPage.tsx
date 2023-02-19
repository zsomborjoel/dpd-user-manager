import dayjs from 'dayjs';
import { Button, Card, Grid, TextField } from '@mui/material';
import { FC, useContext, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../models/User';
import { ISO_DATE_FORMAT } from '../../config/constants';
import UserService from '../../services/UserService';
import { Address } from '../../models/Address';
import { Phone } from '../../models/Phone';
import { SnackbarContext } from '../../contexts/snackbar/SnackbarContext';

const dummyAddress: Address = {
    id: '',
    postalCode: '',
    city: '',
    street: '',
    houseNumber: '',
    floor: '',
};

const dummyPhone: Phone = {
    id: '',
    number: '',
};

const UserFormPage: FC = () => {
    const [user, setUser] = useState<User>({} as User);
    const [phoneFields, setPhoneFields] = useState([dummyPhone]);
    const [addressFields, setAddressFields] = useState<Address[]>([dummyAddress]);

    const { showSnackbar } = useContext(SnackbarContext);

    const clearForm = (): void => {
        setUser({} as User);
        setAddressFields([dummyAddress]);
        setPhoneFields([dummyPhone]);
    };

    const saveUser = (): Promise<void> =>
        UserService.save(user)
            .then(() => showSnackbar({ severity: 'success', text: 'Sikeresen mentve!' }))
            .catch(() => showSnackbar({ severity: 'error', text: 'Hiba történt!' }));

    const updateUser = (property: keyof User, value: any): void => {
        setUser({ ...user, [property]: value } as User);
    };

    return (
        <Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Card sx={{ minWidth: 400 }}>
                <Grid sx={{ m: 1 }}>
                    <Grid item display="flex">
                        <TextField
                            label="Vezetéknév"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.lastName ?? ''}
                            onChange={(e) => updateUser('lastName', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <TextField
                            label="Keresztnév"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.firstName ?? ''}
                            onChange={(e) => updateUser('firstName', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <DatePicker
                            disableMaskedInput
                            label="Születési dátum"
                            inputFormat="yyyy-MM-dd"
                            value={user?.dateOfBirth ?? null}
                            onChange={(date: any) =>
                                updateUser('dateOfBirth', new Date(dayjs(date).format(ISO_DATE_FORMAT)))
                            }
                            renderInput={(params: any) => (
                                <TextField fullWidth margin="dense" size="small" {...params} />
                            )}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <TextField
                            label="Születési hely"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.placeOfBirth ?? ''}
                            onChange={(e) => updateUser('placeOfBirth', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <TextField
                            label="Anyja születési neve"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.mothersName ?? ''}
                            onChange={(e) => updateUser('mothersName', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <TextField
                            label="TAJ szám"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.socialSecurityNumber ?? ''}
                            onChange={(e) => updateUser('socialSecurityNumber', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <TextField
                            label="Adóazonosító jel"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.taxId ?? ''}
                            onChange={(e) => updateUser('taxId', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex">
                        <TextField
                            label="Email cím"
                            fullWidth
                            margin="dense"
                            size="small"
                            value={user?.email ?? ''}
                            onChange={(e) => updateUser('email', e.target.value)}
                        />
                    </Grid>
                    <Grid item display="flex" flexDirection="column">
                        {addressFields.map((field, index) => (
                            <>
                                <TextField
                                    fullWidth
                                    margin="dense"
                                    size="small"
                                    key={uuidv4()}
                                    label={`Irányítószám ${index + 1}`}
                                    value={field.postalCode}
                                    onChange={(e) => {
                                        const newFields = [...addressFields];
                                        newFields[index] = { ...field, postalCode: e.target.value };
                                        setAddressFields(newFields);
                                        updateUser('addresses', newFields);
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    margin="dense"
                                    size="small"
                                    key={uuidv4()}
                                    label={`Város ${index + 1}`}
                                    value={field.city}
                                    onChange={(e) => {
                                        const newFields = [...addressFields];
                                        newFields[index] = { ...field, city: e.target.value };
                                        setAddressFields(newFields);
                                        updateUser('addresses', newFields);
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    margin="dense"
                                    size="small"
                                    key={uuidv4()}
                                    label={`Utca ${index + 1}`}
                                    value={field.street}
                                    onChange={(e) => {
                                        const newFields = [...addressFields];
                                        newFields[index] = { ...field, street: e.target.value };
                                        setAddressFields(newFields);
                                        updateUser('addresses', newFields);
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    margin="dense"
                                    size="small"
                                    key={uuidv4()}
                                    label={`Házszám ${index + 1}`}
                                    value={field.houseNumber}
                                    onChange={(e) => {
                                        const newFields = [...addressFields];
                                        newFields[index] = { ...field, houseNumber: e.target.value };
                                        setAddressFields(newFields);
                                        updateUser('addresses', newFields);
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    margin="dense"
                                    size="small"
                                    key={uuidv4()}
                                    label={`Emelet ${index + 1}`}
                                    value={field.floor}
                                    onChange={(e) => {
                                        const newFields = [...addressFields];
                                        newFields[index] = { ...field, floor: e.target.value };
                                        setAddressFields(newFields);
                                        updateUser('addresses', newFields);
                                    }}
                                />
                            </>
                        ))}
                    </Grid>
                    <Button onClick={() => setAddressFields([...addressFields, dummyAddress])}>Új Cím</Button>
                    <Grid item display="flex" flexDirection="column">
                        {phoneFields.map((field, index) => (
                            <TextField
                                fullWidth
                                margin="dense"
                                size="small"
                                key={uuidv4()}
                                label={`Telefonszám ${index + 1}`}
                                value={field.number}
                                onChange={(e) => {
                                    const newFields = [...phoneFields];
                                    newFields[index] = { ...field, number: e.target.value };
                                    setPhoneFields(newFields);
                                    updateUser('phones', newFields);
                                }}
                            />
                        ))}
                    </Grid>
                    <Button onClick={() => setPhoneFields([...phoneFields, dummyPhone])}>Új Telefonszám</Button>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={6} display="flex" sx={{ m: 2 }}>
                        <Button sx={{ width: 140 }} variant="contained" onClick={saveUser}>
                            Mentés
                        </Button>
                        <Button sx={{ width: 140, ml: 1 }} variant="outlined" onClick={clearForm}>
                            Új hozzáadása
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

export default UserFormPage;
