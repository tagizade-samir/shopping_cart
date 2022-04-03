import React, { FC, useEffect, useMemo } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'src/modules/redux';
import { IProduct } from 'src/modules/redux/reducers/products/types';
import { getAllProductsSaga } from 'src/modules/saga/products/actions';
import { ISubCategory } from 'src/modules/redux/reducers/subCategories/types';
import { selectSubCategories } from 'src/modules/redux/reducers/subCategories/selectors';
import { selectIsLoadingProducts, selectProducts, selectProductsModalState } from 'src/modules/redux/reducers/products/selectors';
import { styles } from './index.style';
import { SubCategories } from './components/subCategories';
import { Products } from './components/products';
import { ProductModal } from './components/productModal';
import { setProductsModalStateAC } from 'src/modules/redux/reducers/products/actions';
import { addCartItemAC } from 'src/modules/redux/reducers/cart/actions';
import { updateCartItemsSaga } from 'src/modules/saga/cart/actions';

const CategoriesContent: FC<{}> = () => {
    const router = useRouter();
    const { name } = router.query as { name: string };
    const dispatch: AppDispatch = useDispatch();
    const subCategories: Array<ISubCategory> = useSelector(selectSubCategories);
    const products: Array<IProduct> = useSelector(selectProducts);
    const isLoading: boolean = useSelector(selectIsLoadingProducts);
    const { isProductsModalOpen, selectedProduct } = useSelector(selectProductsModalState);

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
        <Box sx={styles.rootWrapper}>
            {isLoading ? <LinearProgress sx={{ width: '100%' }} /> : null}
            <Box sx={styles.productsListWrapper}>
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