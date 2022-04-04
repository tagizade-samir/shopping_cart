import React, { FC } from 'react';
import { Box, useTheme } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer as MUIDrawer, Theme } from '@mui/material';

import MainButton from '../mainButton';
import { getStyles } from './index.style';
import { Utils } from '../../services/utils';
import { AppDispatch } from '../../modules/redux';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import { selectIsDrawerOpen } from '../../modules/redux/reducers/app/selectors';

export const Drawer: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const theme: Theme = useTheme();
    const router: NextRouter = useRouter();
    const isOpen: boolean = useSelector(selectIsDrawerOpen);
    const styles = getStyles(theme);

    const toggleDrawer = () => {
        dispatch(setDrawerStateAC(!isOpen));
    }

    const handleGoHome = () => {
        dispatch(setDrawerStateAC(false));
        router.push(Utils.ROUTES.root);
    }

    const handleGoCategories = () => {
        dispatch(setDrawerStateAC(false));
        router.push(Utils.ROUTES.categories);
    }

    return(
        <MUIDrawer
            variant="persistent"
            open={isOpen}
            onClose={toggleDrawer}
            anchor='left'>
                <Box sx={styles.rootWrapper}>
                    <MainButton variant='contained' title='Home' onClick={handleGoHome} />
                    <MainButton variant='contained' title='Categories' onClick={handleGoCategories} />
                </Box>
        </MUIDrawer>
    );
}