import React, { Dispatch, FC, SetStateAction, SyntheticEvent, useMemo, useState } from 'react';
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
import { CartPopover } from '../cartPopover';

const MainHeader: FC<{}> = () => {
    const isDrawerOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const [anchor, setAnchor]: any = useState(null);

    const handleToggleDrawer = () => {
        dispatch(setDrawerStateAC(!isDrawerOpen));
    }

    const handleOpenCart = (e: SyntheticEvent) => {
        setAnchor(e.currentTarget);
    }

    const handleCloseCart = () => {
        setAnchor(null);
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
                <CartPopover anchor={anchor} isOpen={!!anchor} handleCloseCart={handleCloseCart} />
                <MainIconButton icon={<AccountCircleIcon color='secondary' />} onClick={handleGoToProfile} title='Profile' />
            </Box>
        </Box>
    );
}

export default MainHeader;