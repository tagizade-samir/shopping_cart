import React, { FC } from 'react';
import { Box, useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Drawer as MUIDrawer, IconButton, Theme, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { getStyles } from './index.style';
import { selectIsDrawerOpen } from '../../modules/redux/reducers/app/selectors';
import { AppDispatch } from '../../modules/redux';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import MainButton from '../mainButton';
import { NextRouter, useRouter } from 'next/router';

export const Drawer: FC<{}> = () => {
    const isOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);
    const router: NextRouter = useRouter();

    const toggleDrawer = () => {
        dispatch(setDrawerStateAC(!isOpen));
    }

    const handleGoHome = () => {
        dispatch(setDrawerStateAC(false));
        router.push('/');
    }

    return(
        <MUIDrawer
            variant="persistent"
            open={isOpen}
            onClose={toggleDrawer}
            anchor='left'>
                <Box sx={styles.rootWrapper}>
                    <MainButton variant='contained' title='Home' onClick={handleGoHome} />
                </Box>
        </MUIDrawer>
    );
}