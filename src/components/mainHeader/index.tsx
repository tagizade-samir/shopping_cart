import React, { FC } from 'react';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MainButton from '../mainButton';
import { selectIsDrawerOpen } from 'src/modules/redux/reducers/app/selectors';
import { AppDispatch } from 'src/modules/redux';
import { setDrawerStateAC } from 'src/modules/redux/reducers/app/actions';
import { styles } from './index.style';

const MainHeader: FC<{}> = () => {
    const isDrawerOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();

    const handleToggleDrawer = () => {
        dispatch(setDrawerStateAC(!isDrawerOpen));
    }

    const handleOpenCart = () => {

    }

    const handleGoToProfile = () => {
        
    }

    return(
        <Box sx={styles.root}>
            <MainButton icon={<MenuIcon color='secondary' />} onClick={handleToggleDrawer} />
            <Box sx={styles.rightButtonsWrapper}>
                <MainButton icon={<ShoppingCartIcon color='secondary' />} onClick={handleOpenCart} />
                <MainButton icon={<AccountCircleIcon color='secondary' />} onClick={handleGoToProfile} />
            </Box>
        </Box>
    );
}

export default MainHeader;