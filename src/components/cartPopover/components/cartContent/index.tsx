import { Theme } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { IProduct } from '../../../../modules/redux/reducers/products/types';
import { Utils } from '../../../../services/utils';
import MainButton from '../../../mainButton';
import { CartItem } from '../cartItem';
import { getStyles } from './index.style';

interface CartContentProps {
    items: Array<IProduct>;
}

export const CartContent: FC<CartContentProps> = ({ items }) => {
    const [totalPrice, setTotalPrice] = useState(0.0);
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

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
        <Box sx={styles.rootWrapper}>
            <Box sx={styles.contentWrapper}>
                {products.map(({ item, count }: any) => <CartItem key={item.id} item={item} count={count} />)}
            </Box>
            <Box sx={styles.priceWrapper}>
                {totalPrice} $
                <MainButton variant='contained' onClick={() => {}} title='Confirm order' />
            </Box>
        </Box>
    );
}