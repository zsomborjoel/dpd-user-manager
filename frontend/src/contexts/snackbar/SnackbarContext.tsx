import React, { createContext, FC, ReactElement, useCallback, useMemo, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { SnackbarContent } from './SnackbarContent';

interface SnackbarContextInterface {
    snackbar: SnackbarContent;
    showSnackbar: (snackbar: Partial<SnackbarContent>) => void;
}

const defaultValue: SnackbarContextInterface = {
    snackbar: {
        text: '',
        severity: 'info',
        isOpen: false,
    },
    showSnackbar: () => {},
};

export const SnackbarContext = createContext<SnackbarContextInterface>(defaultValue);

type Props = {
    children: ReactElement;
};

const SnackbarContextProvider: FC<Props> = ({ children }): JSX.Element => {
    const [snackbar, setSnackbar] = useState<SnackbarContent>(defaultValue.snackbar);

    const showSnackbar = useCallback((snackbarParameter: Partial<SnackbarContent>): void => {
        setSnackbar((previewState: SnackbarContent) => ({
            ...previewState,
            ...snackbarParameter,
            isOpen: true,
        }));
    }, []);

    const closeSnackbar = useCallback(() => {
        setSnackbar((previewState: SnackbarContent) => ({
            ...previewState,
            isOpen: false,
        }));
    }, []);

    const value = useMemo(
        () => ({
            snackbar,
            showSnackbar,
        }),
        [snackbar, showSnackbar]
    );

    return (
        <SnackbarContext.Provider value={value}>
            <Snackbar open={snackbar.isOpen} autoHideDuration={3000} onClose={closeSnackbar}>
                <Alert severity={snackbar?.severity || 'info'}>{snackbar?.text}</Alert>
            </Snackbar>
            {children}
        </SnackbarContext.Provider>
    );
};

export default SnackbarContextProvider;
