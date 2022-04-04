import React, { Dispatch, FC, SetStateAction, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { getStyles } from './index.style';
import MainIconButton from '../mainIconButton';
import { Badge, Theme, Typography, useTheme } from '@mui/material';
import { CartPopover } from '../cartPopover';
import { selectIsDrawerOpen } from '../../modules/redux/reducers/app/selectors';
import { selectCartItems } from '../../modules/redux/reducers/cart/selectors';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import { AppDispatch } from '../../modules/redux';
import { IProduct } from '../../modules/redux/reducers/products/types';
import { NextRouter, useRouter } from 'next/router';

const MainHeader: FC<{}> = () => {
    const isDrawerOpen: boolean = useSelector(selectIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();
    const items: Array<IProduct> | [] = useSelector(selectCartItems);
    const [anchor, setAnchor]: any = useState(null);
    const router: NextRouter = useRouter();
    const theme: Theme = useTheme();
    const styles = getStyles(theme, isDrawerOpen);

    useEffect(() => {
        setAnchor(null);
    }, [router.pathname]);

    const handleToggleDrawer = () => {
        setAnchor(null);
        dispatch(setDrawerStateAC(!isDrawerOpen));
    }

    const handleToggleCart = (e: SyntheticEvent) => {
        if (!!anchor) {
            setAnchor(null);
        } else {
            setAnchor(e.currentTarget);
        }
    }

    const handleGoToProfile = () => {
        
    }

    const badgedIcon = useMemo(() => {
        return <Badge badgeContent={items.length} color='primary'>
            <ShoppingCartIcon color='secondary' />
        </Badge>;
    }, [items.length]);

    const badgeTitle = useMemo(() => {
        return <Badge badgeContent={items.length} color='primary'>
            <Typography>Cart</Typography>
        </Badge>;
    }, [])

    return(
        <Box sx={styles.root}>
            <MainIconButton icon={<MenuIcon color='secondary' />} onClick={handleToggleDrawer} title='Menu' />
            <Box sx={styles.rightButtonsWrapper}>
                <MainIconButton icon={badgedIcon} onClick={handleToggleCart} title={badgeTitle} />
                <CartPopover handleToggleCart={handleToggleCart} anchor={anchor} isOpen={!!anchor} />
                <MainIconButton icon={<AccountCircleIcon color='secondary' />} onClick={handleGoToProfile} title='Profile' />
            </Box>
        </Box>
    );
}

export default MainHeader;