import { Theme, Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import Image from 'next/image';
import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../../../modules/redux/reducers/products/types';
import { AppDispatch } from '../../../../modules/redux';
import { updateCartItemsSaga } from '../../../../modules/saga/cart/actions';
import MainIconButton from '../../../mainIconButton';
import { getStyles } from './index.style';

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