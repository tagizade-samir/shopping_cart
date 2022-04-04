import React, { FC, useMemo } from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { ProductItem } from '../productItem';
import { IProduct } from '../../modules/redux/reducers/products/types';
import { selectCartItemsIds } from '../../modules/redux/reducers/cart/selectors';
import { selectSelectedSubCategory } from '../../modules/redux/reducers/subCategories/selectors';

interface ProductsProps {
    list: Array<IProduct>;
}

export const Products: FC<ProductsProps> = ({ list }) => {
    const selectedSubCategory: number = useSelector(selectSelectedSubCategory);
    const addedIds: Array<number> = useSelector(selectCartItemsIds);

    const content = useMemo(() => {
        if (!list.length) return null;

        return list
                .filter((product: IProduct) => selectedSubCategory ? product.sub_category_id === selectedSubCategory : true)
                .map((product: IProduct) => <ProductItem isAdded={addedIds.includes(product.id)} key={product.id} item={product} />);
    }, [list, selectedSubCategory, addedIds]);

    return(
        <Grid container spacing={0} rowGap={4} >
            {content}
        </Grid>
    );
}