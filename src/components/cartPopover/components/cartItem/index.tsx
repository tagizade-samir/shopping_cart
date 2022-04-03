import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { FC } from 'react';
import MainIconButton from 'src/components/mainIconButton';
import { IProduct } from 'src/modules/redux/reducers/products/types';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AppDispatch } from 'src/modules/redux';
import { useDispatch } from 'react-redux';
import { updateCartItemsSaga } from 'src/modules/saga/cart/actions';

interface CartItemProps {
    item: IProduct;
    count: number;
}

export const CartItem: FC<CartItemProps> = ({ item, count }) => {
    const dispatch: AppDispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(updateCartItemsSaga({ type: 'add', data: item }));
    }

    const handleRemoveItem = () => {
        dispatch(updateCartItemsSaga({ type: 'delete', data: item.id }));
    }

    return(
        <Box sx={{ padding: '5px', backgroundColor: '#89b0ae', margin: '5px 0px', display: 'flex' }}>
            <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <Typography>
                    {item.name}
                </Typography>
                <Typography>
                    {item.price} $
                </Typography>
            </Box>
            <Box sx={{ width: 80, display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1 }}>
                <MainIconButton onClick={handleAddItem} icon={<AddIcon />} title='+' />
                <Typography>
                    {count}
                </Typography>
                <MainIconButton onClick={handleRemoveItem} icon={<RemoveIcon />} title='-' />
            </Box>
        </Box>
    )
}