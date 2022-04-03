import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Theme, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React, { FC, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import MainButton from '../../../../components/mainButton';
import { AppDispatch } from '../../../../modules/redux';
import { setProductsModalStateAC } from '../../../../modules/redux/reducers/products/actions';
import { IProduct } from '../../../../modules/redux/reducers/products/types';
import { updateCartItemsSaga } from '../../../../modules/saga/cart/actions';
import { getStyles } from './index.style';

interface ProductItemProps {
    item: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ item }) => {
    const dispatch: AppDispatch = useDispatch();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

    const handleClickOnItem = () => {
        dispatch(setProductsModalStateAC({ isProductsModalOpen: true, selectedProduct: item }));
    }

    const handleClickOnAddToCart = (e: SyntheticEvent) => {
        e.stopPropagation();
        dispatch(updateCartItemsSaga({ type: 'add', data: item }));
    }

    return(
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} sx={styles.rootWrapper}>
            <Card sx={styles.cardWrapper} onClick={handleClickOnItem}>
                <CardActionArea sx={styles.topContainer}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image_url}
                        alt="green iguana"
                        />
                    <CardContent sx={styles.contentContainer}>
                        <Typography sx={styles.itemName} gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography sx={styles.itemPrice} variant="body2">
                            {item.price} $
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={styles.buttonContainer}>
                    <MainButton variant='contained' title='Add to cart' onClick={handleClickOnAddToCart} />
                </CardActions>
            </Card>
        </Grid>
    );
}