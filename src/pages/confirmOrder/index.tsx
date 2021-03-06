import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';

import { getStyles } from '../../../styles/style';
import { Utils } from '../../services/utils';
import { AppDispatch } from '../../modules/redux';
import { removeItem } from '../../modules/storage';
import MainButton from '../../components/mainButton';
import { clearCartAC } from '../../modules/redux/reducers/cart/actions';

const ConfirmOrder: FC<{}> = () => {
    const router: NextRouter = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const { data }: any = router.query;
    const [products, setProducts] = useState([]);
    const styles = getStyles();

    useEffect(() => {
        if (data) {
            try {
                const result = JSON.parse(data);
                setProducts(result);
            } catch(e) {
                console.warn('Error parse products: ', e);
            }
        }
    }, []);

    const handleConfirmOrder = () => {
        dispatch(clearCartAC());
        removeItem(Utils.CONSTANTS.cartItemsKey);
        router.push(Utils.ROUTES.categories);
    }

    return(
        <Box sx={styles.confirmOrderWrapper}>
            {products.map((product: string) => (
                <Typography variant='h4' key={product}>
                    {product}
                </Typography>
            ))}
            <MainButton title='Imitate confirm order' onClick={handleConfirmOrder} variant='contained' />
        </Box>
    );
}

export default ConfirmOrder;