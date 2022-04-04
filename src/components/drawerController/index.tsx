import { Box, Theme, useMediaQuery } from '@mui/material';
import React, { FC, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../modules/redux';

import { getStyles } from './index.style';
import { Utils } from '../../services/utils';
import { synchronizeAppSaga } from '../../modules/saga/app/actions';

interface DrawerControllerProps {
    children: Array<any>;
}

const DrawerController: FC<DrawerControllerProps> = ({ children }) => {
    const isDrawerOpen: boolean = useSelector((state: RootState) => state.app.isDrawerOpen);
    const theme: Theme = useTheme();
    const styles = useMemo(() => getStyles(), []);
    const matches = useMediaQuery(theme.breakpoints.down(300));
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(synchronizeAppSaga());
    }, []);

    const marginLeft = useMemo(() => {
        if (matches) {
            return isDrawerOpen ? 100 : 0;
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

export default DrawerController;