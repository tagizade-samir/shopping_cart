import React, { FC, useEffect, useMemo } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'src/modules/redux';
import { IProduct } from 'src/modules/redux/reducers/products/types';
import { getAllProductsSaga } from 'src/modules/saga/products/actions';
import { ISubCategory } from 'src/modules/redux/reducers/subCategories/types';
import { selectSubCategories } from 'src/modules/redux/reducers/subCategories/selectors';
import { selectIsLoadingProducts, selectProducts } from 'src/modules/redux/reducers/products/selectors';
import { styles } from './index.style';
import { SubCategories } from './components/subCategories';
import { Products } from './components/products';

const CategoriesContent: FC<{}> = () => {
    const router = useRouter();
    const { name } = router.query as { name: string };
    const dispatch: AppDispatch = useDispatch();
    const subCategories: Array<ISubCategory> = useSelector(selectSubCategories);
    const products: Array<IProduct> = useSelector(selectProducts);
    const isLoading: boolean = useSelector(selectIsLoadingProducts);

    useEffect(() => {
        if (name) {
            dispatch(getAllProductsSaga(name));
        }
    }, [name, dispatch]);

    const subCategoriesContent = useMemo(() => {
        return subCategories.length && !isLoading
            ? <SubCategories list={subCategories} />
            : null;
    }, [subCategories, isLoading]);

    const productsContent = useMemo(() => {
        return products.length && !isLoading
            ? <Products list={products} />
            : null;
    }, [products, isLoading]);

    return(
        <Box sx={styles.rootWrapper}>
            {isLoading ? <LinearProgress sx={{ width: '100%' }} /> : null}
            <Box sx={styles.productsListWrapper}>
                {subCategoriesContent}
                {productsContent}
            </Box>
        </Box>
    );
}

export default CategoriesContent;