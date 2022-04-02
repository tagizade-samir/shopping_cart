import React, { FC } from 'react';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MainButton from '../mainButton';
import { getIsDrawerOpen } from 'src/modules/redux/reducers/app/selectors';
import { AppDispatch } from 'src/modules/redux';
import { setDrawerStateAC } from 'src/modules/redux/reducers/app/actions';

const MainHeader: FC<{}> = () => {
    const isDrawerOpen: boolean = useSelector(getIsDrawerOpen);
    const dispatch: AppDispatch = useDispatch();

    const handleToggleDrawer = () => {
        dispatch(setDrawerStateAC(!isDrawerOpen));
    }

    const handleOpenCart = () => {

    }

    return(
        <Box sx={{
            backgroundColor: '#89b0ae',
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            paddingY: '10px',
        }}>
            <MainButton icon={<MenuIcon color='secondary' />} onClick={handleToggleDrawer} />
            <MainButton icon={<ShoppingCartIcon color='secondary' />} onClick={handleOpenCart} />
        </Box>
    );
}

export default MainHeader;