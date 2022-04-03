import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import MainButton from 'src/components/mainButton';
import { IProduct } from 'src/modules/redux/reducers/products/types';
import { styles } from './index.style';

interface ProductItemProps {
    item: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ item }) => {
    return(
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} sx={styles.rootWrapper}>
            <Card sx={styles.cardWrapper}>
                <CardActionArea sx={styles.topContainer}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={item.image_url}
                        alt="green iguana"
                        />
                    <CardContent sx={styles.contentContainer}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2">
                            {item.price} $
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <MainButton title='Add to cart' onClick={() => {}} />
                </CardActions>
            </Card>
        </Grid>
    );
}