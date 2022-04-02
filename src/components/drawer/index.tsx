import React, { FC } from 'react';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer as MUIDrawer, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { styles } from './index.style';
import { AppDispatch } from 'src/modules/redux';
import { setDrawerStateAC } from 'src/modules/redux/reducers/app/actions';
import { selectIsDrawerOpen } from 'src/modules/redux/reducers/app/selectors';

export const Drawer: FC<{}> = () => {
    const isOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();

    const toggleDrawer = () => {
        dispatch(setDrawerStateAC(!isOpen));
    }

    return(
        <MUIDrawer
            variant="persistent"
            open={isOpen}
            onClose={toggleDrawer}
            anchor='left'>
        <div style={styles.header}>drawer</div>
        </MUIDrawer>
    );
}