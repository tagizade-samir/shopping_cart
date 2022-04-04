import React, { FC, useEffect, useMemo } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Box, LinearProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { getStyles } from '../../../styles/style';
import { AppDispatch } from '../../modules/redux';
import { Products } from '../../components/products';
import { ProductModal } from '../../components/productModal';
import { SubCategories } from '../../components/subCategories';
import { updateCartItemsSaga } from '../../modules/saga/cart/actions';
import { IProduct } from '../../modules/redux/reducers/products/types';
import { getAllProductsSaga } from '../../modules/saga/products/actions';
import { ISubCategory } from '../../modules/redux/reducers/subCategories/types';
import { setProductsModalStateAC } from '../../modules/redux/reducers/products/actions';
import { selectSubCategories } from '../../modules/redux/reducers/subCategories/selectors';
import { selectIsLoadingProducts, selectProducts, selectProductsModalState } from '../../modules/redux/reducers/products/selectors';

const CategoriesContent: FC<{}> = () => {
    const router: NextRouter = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const { name } = router.query as { name: string };
    const subCategories: Array<ISubCategory> = useSelector(selectSubCategories);
    const products: Array<IProduct> = useSelector(selectProducts);
    const isLoading: boolean = useSelector(selectIsLoadingProducts);
    const { isProductsModalOpen, selectedProduct } = useSelector(selectProductsModalState);
    const styles = getStyles();

    useEffect(() => {
        if (name) {
            dispatch(getAllProductsSaga(name));
        }
    }, [name, dispatch]);

    const handleCloseModal = () => {
        dispatch(setProductsModalStateAC({ isProductsModalOpen: false, selectedProduct: null }));
    }

    const handleAddToCart = (item: IProduct) => {
        dispatch(updateCartItemsSaga({ type: 'add', data: item }));
        dispatch(setProductsModalStateAC({ isProductsModalOpen: false, selectedProduct: null }));
    }

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
        <Box sx={styles.subCategoriesWrapper}>
            {isLoading ? <LinearProgress sx={{ width: '100%' }} /> : null}
            <Box sx={styles.subCategoriesContent}>
                {subCategoriesContent}
                {productsContent}
            </Box>
            {isProductsModalOpen
                ? <ProductModal
                        item={selectedProduct}
                        isOpen={isProductsModalOpen}
                        handleClose={handleCloseModal}
                        handleAddToCart={handleAddToCart} />
                : null}
        </Box>
    );
}

export default CategoriesContent;