import React, { FC } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../modules/redux';
import { setSnackbarStateAC } from '../../modules/redux/reducers/app/actions';
import { selectSnackbarState } from '../../modules/redux/reducers/app/selectors';

export const InfoHOC: FC<{}> = ({ children }) => {
    const dispatch: AppDispatch = useDispatch();
    const { isOpen, text, severity } = useSelector(selectSnackbarState);

    const handleCloseSnackbar = () => {
        dispatch(setSnackbarStateAC({ isOpen: false, text: '', severity: 'info' }));
    }

    return(
        <>
            {children}
            <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                    {text}
                </Alert>
            </Snackbar>
        </>
    );
}