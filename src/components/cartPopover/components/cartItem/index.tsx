import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box, useTheme } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { Theme, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

import { getStyles } from './index.style';
import MainIconButton from '../../../mainIconButton';
import { AppDispatch } from '../../../../modules/redux';
import { updateCartItemsSaga } from '../../../../modules/saga/cart/actions';
import { IProduct } from '../../../../modules/redux/reducers/products/types';

interface CartItemProps {
    item: IProduct;
    count: number;
}

export const CartItem: FC<CartItemProps> = ({ item, count }) => {
    const dispatch: AppDispatch = useDispatch();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

    const handleAddItem = () => {
        dispatch(updateCartItemsSaga({ type: 'add', data: item }));
    }

    const handleRemoveItem = () => {
        dispatch(updateCartItemsSaga({ type: 'delete', data: item.id }));
    }

    return(
        <Box sx={styles.rootWrapper}>
            <Box sx={styles.itemWrapper}>
                <Typography>
                    {item.name}
                </Typography>
                <Typography>
                    {item.price} $
                </Typography>
            </Box>
            <Box sx={styles.buttonsWrapper}>
                <MainIconButton onClick={handleAddItem} icon={<AddIcon />} title='+' />
                <Typography>
                    {count}
                </Typography>
                <MainIconButton onClick={handleRemoveItem} icon={<RemoveIcon />} title='-' />
            </Box>
        </Box>
    )
}