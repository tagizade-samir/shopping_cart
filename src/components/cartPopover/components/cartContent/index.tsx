import { Theme } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../modules/redux';
import { setSnackbarStateAC } from '../../../../modules/redux/reducers/app/actions';
import { IProduct } from '../../../../modules/redux/reducers/products/types';
import { selectIsUserAuthorized } from '../../../../modules/redux/reducers/user/selectors';
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
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);
    const dispatch: AppDispatch = useDispatch();
    const router: NextRouter = useRouter();

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

    const handleConfirmOrder = () => {
        if (isUserAuthorized) {
            router.push(`/confirmOrder?data=${JSON.stringify(items.map(i => `${i.name} - ${i.price} $`))}`);
        } else {
            dispatch(setSnackbarStateAC({ isOpen: true, text: 'You have to sign in to confirm your order', severity: 'error' }));
        }
    }

    return(
        <Box sx={styles.rootWrapper}>
            <Box sx={styles.contentWrapper}>
                {products.map(({ item, count }: any) => <CartItem key={item.id} item={item} count={count} />)}
            </Box>
            <Box sx={styles.priceWrapper}>
                {totalPrice} $
                <MainButton variant='contained' onClick={handleConfirmOrder} title='Confirm order' />
            </Box>
        </Box>
    );
}