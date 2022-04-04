import React, { FC } from 'react';
import { Card, CardActions, CardMedia, Modal, Typography, useTheme, Theme } from '@mui/material';

import MainButton from '../mainButton';
import { getStyles } from './index.style';
import { IProduct } from '../../modules/redux/reducers/products/types';

interface ProductModalProps {
    isOpen: boolean;
    handleClose: () => void;
    item: IProduct;
    handleAddToCart: (item: IProduct) => void;
}

export const ProductModal: FC<ProductModalProps> = ({ isOpen, handleClose, item, handleAddToCart }) => {
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

    return(
        <Modal open={isOpen} onClose={handleClose} sx={styles.modal}>
            <Card sx={styles.rootWrapper}>
                <CardMedia
                    component="img"
                    height="300"
                    sx={{ objectFit: 'contain' }}
                    image={item?.image_url}
                    alt={item?.name}
                    />
                <Typography sx={styles.headerTitle} variant='h4'>
                    {item?.name}
                </Typography>
                <Typography sx={styles.price} variant='h5'>
                    {item?.price} $
                </Typography>
                <Typography sx={styles.description}>
                    {item?.description}
                </Typography>
                <CardActions sx={styles.buttonWrapper}>
                    <MainButton variant='contained' title='Close' onClick={handleClose} />
                    <MainButton variant='contained' title='Add to cart' onClick={() => handleAddToCart(item)} />
                </CardActions>
            </Card>
        </Modal>
    );
}