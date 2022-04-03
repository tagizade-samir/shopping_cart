import { Box } from '@mui/system';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { IProduct } from 'src/modules/redux/reducers/products/types';
import { Utils } from 'src/services/utils';
import { CartItem } from '../cartItem';

interface CartContentProps {
    items: Array<IProduct>;
}

export const CartContent: FC<CartContentProps> = ({ items }) => {
    const [totalPrice, setTotalPrice] = useState(0.0);

    const products = useMemo(() => {
        return Object.values(Utils.HELPERS.groupCartItems(items));
    }, [items]);

    useEffect(() => {
        if (!items.length) {
            setTotalPrice(0.0);
        } else {
            const newTotalPrice = items.reduce((prev, curr) => prev + curr.price, 0);
            setTotalPrice(parseFloat(newTotalPrice.toFixed(1)));
        }
    }, [items.length]);

    return(
        <Box sx={{ width: 500, display: 'flex' }}>
            <Box sx={{ width: '70%', paddingX: '10px' }}>
                {products.map(({ item, count }: { item: IProduct, count: number }) => <CartItem key={item.id} item={item} count={count} />)}
            </Box>
            <Box sx={{ width: '30%', paddingX: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {totalPrice} $
            </Box>
        </Box>
    );
}