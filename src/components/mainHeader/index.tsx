import React, { FC, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, Theme, Typography, useTheme } from '@mui/material';

import { getStyles } from './index.style';
import { CartPopover } from '../cartPopover';
import MainIconButton from '../mainIconButton';
import { AppDispatch } from '../../modules/redux';
import { IProduct } from '../../modules/redux/reducers/products/types';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import { selectCartItems } from '../../modules/redux/reducers/cart/selectors';
import { selectIsDrawerOpen } from '../../modules/redux/reducers/app/selectors';
import { selectIsUserAuthorized } from '../../modules/redux/reducers/user/selectors';

const MainHeader: FC<{}> = () => {
    const theme: Theme = useTheme();
    const router: NextRouter = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const isDrawerOpen: boolean = useSelector(selectIsDrawerOpen);
    const styles = getStyles(theme, isDrawerOpen);
    const [anchor, setAnchor]: any = useState(null);
    const items: Array<IProduct> | [] = useSelector(selectCartItems);
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);

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
        if (isUserAuthorized) {
            router.push('/profile');
        } else {
            router.push('/signUp');
        }
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