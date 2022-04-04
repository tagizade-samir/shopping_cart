import React, { FC, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Theme, useMediaQuery } from '@mui/material';

import { getStyles } from './index.style';
import { Utils } from '../../services/utils';
import { AppDispatch, RootState } from '../../modules/redux';
import { synchronizeAppSaga } from '../../modules/saga/app/actions';

interface DrawerControllerProps {
    children: Array<any>;
}

const { smallerDrawerWidth, drawerChangeWidth } = Utils.CONSTANTS;

export const DrawerController: FC<DrawerControllerProps> = ({ children }) => {
    const isDrawerOpen: boolean = useSelector((state: RootState) => state.app.isDrawerOpen);
    const theme: Theme = useTheme();
    const styles = useMemo(() => getStyles(), []);
    const matches: boolean = useMediaQuery(theme.breakpoints.down(drawerChangeWidth));
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(synchronizeAppSaga());
    }, []);

    const marginLeft: number = useMemo(() => {
        if (matches) {
            return isDrawerOpen ? smallerDrawerWidth : 0;
        } else {
            return isDrawerOpen ? Utils.CONSTANTS.drawerWidth : 0;
        }
    }, [matches, isDrawerOpen]);

    return(
        <Box style={{...styles.mainWrapper, marginLeft }}>
            {children}
        </Box>
    );
}