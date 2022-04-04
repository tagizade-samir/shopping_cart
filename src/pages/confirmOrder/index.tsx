import React, { FC, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';

import { AppDispatch } from '../../modules/redux';
import MainButton from '../../components/mainButton';
import { clearCartAC } from '../../modules/redux/reducers/cart/actions';

const ConfirmOrder: FC<{}> = () => {
    const router: NextRouter = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const { data }: any = router.query;
    const [products, setProducts] = useState([]);

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
        router.push('/categories');
    }

    return(
        <Box sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingY: 10,
            gap: 3
        }}>
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