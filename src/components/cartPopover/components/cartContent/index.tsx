import React, { Dispatch, FC, useEffect, useMemo, useState } from 'react';
import { Theme } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '../cartItem';
import { getStyles } from './index.style';
import MainButton from '../../../mainButton';
import { Utils } from '../../../../services/utils';
import { AppDispatch } from '../../../../modules/redux';
import { IProduct } from '../../../../modules/redux/reducers/products/types';
import { setSnackbarStateAC } from '../../../../modules/redux/reducers/app/actions';
import { selectIsUserAuthorized } from '../../../../modules/redux/reducers/user/selectors';

interface CartContentProps {
    items: Array<IProduct>;
}

export const CartContent: FC<CartContentProps> = ({ items }) => {
    const theme: Theme = useTheme();
    const router: NextRouter = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const styles = getStyles(theme);
    const [totalPrice, setTotalPrice]: [number, Dispatch<React.SetStateAction<number>>] = useState(0.0);
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);
    
    useEffect(() => {
        if (!items.length) {
            setTotalPrice(0.0);
        } else {
            const newTotalPrice = items.reduce((prev, curr) => prev + curr.price, 0);
            setTotalPrice(parseFloat(newTotalPrice.toFixed(1)));
        }
    }, [items.length]);

    const products = useMemo(() => {
        return Object.values(Utils.HELPERS.groupCartItems(items));
    }, [items]);

    const handleConfirmOrder = () => {
        if (isUserAuthorized) {
            router.push(`${Utils.ROUTES.confirmOrder}?data=${JSON.stringify(items.map(i => `${i.name} - ${i.price} $`))}`);
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