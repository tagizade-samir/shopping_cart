import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import MainButton from '../../components/mainButton';
import { AppDispatch } from '../../modules/redux';
import { clearCartAC } from '../../modules/redux/reducers/cart/actions';

const ConfirmOrder: FC<{}> = () => {
    const router: NextRouter = useRouter();
    const { data }: any = router.query;
    const products = JSON.parse(data);
    const dispatch: AppDispatch = useDispatch();

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