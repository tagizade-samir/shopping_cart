import { Box, Theme, useTheme } from '@mui/material';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/redux';

import { getStyles } from './index.style';

interface DrawerControllerProps {
    children: Array<any>;
}

const DrawerController: FC<DrawerControllerProps> = ({ children }) => {
    const isDrawerOpen: boolean = useSelector((state: RootState) => state.app.isDrawerOpen);
    const theme: Theme = useTheme();
    const styles = useMemo(() => getStyles(theme, isDrawerOpen), [isDrawerOpen]);

    return(
        <Box style={styles.mainWrapper}>
            {children}
        </Box>
    );
}

export default DrawerController;