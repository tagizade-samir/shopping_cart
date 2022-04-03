import React, { FC } from 'react';
import { Box, useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer as MUIDrawer, IconButton, Theme, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { getStyles } from './index.style';
import { selectIsDrawerOpen } from '../../modules/redux/reducers/app/selectors';
import { AppDispatch } from '../../modules/redux';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';

export const Drawer: FC<{}> = () => {
    const isOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

    const toggleDrawer = () => {
        dispatch(setDrawerStateAC(!isOpen));
    }

    return(
        <MUIDrawer
            variant="persistent"
            open={isOpen}
            onClose={toggleDrawer}
            anchor='left'>
        <Typography sx={styles.header}>drawer</Typography>
        </MUIDrawer>
    );
}