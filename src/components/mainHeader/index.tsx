import React, { FC, useMemo } from 'react';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { styles } from './index.style';
import MainIconButton from '../mainIconButton';
import { AppDispatch } from 'src/modules/redux';
import { setDrawerStateAC } from 'src/modules/redux/reducers/app/actions';
import { selectIsDrawerOpen } from 'src/modules/redux/reducers/app/selectors';
import { Badge } from '@mui/material';
import { selectCartItems } from 'src/modules/redux/reducers/cart/selectors';

const MainHeader: FC<{}> = () => {
    const isDrawerOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleToggleDrawer = () => {
        dispatch(setDrawerStateAC(!isDrawerOpen));
    }

    const handleOpenCart = () => {

    }

    const handleGoToProfile = () => {
        
    }

    const badgedIcon = useMemo(() => {
        return <Badge badgeContent={cartItems.items.length} color='primary'>
            <ShoppingCartIcon color='secondary' />
        </Badge>
    }, [cartItems.items.length]);

    return(
        <Box sx={styles.root}>
            <MainIconButton icon={<MenuIcon color='secondary' />} onClick={handleToggleDrawer} title='Menu' />
            <Box sx={styles.rightButtonsWrapper}>
                <MainIconButton icon={badgedIcon} onClick={handleOpenCart} title='Cart' />
                <MainIconButton icon={<AccountCircleIcon color='secondary' />} onClick={handleGoToProfile} title='Profile' />
            </Box>
        </Box>
    );
}

export default MainHeader;