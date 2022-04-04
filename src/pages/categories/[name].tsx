import React, { FC, useEffect, useMemo } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../modules/redux';
import { ISubCategory } from '../../modules/redux/reducers/subCategories/types';
import { selectSubCategories } from '../../modules/redux/reducers/subCategories/selectors';
import { selectIsLoadingProducts, selectProducts, selectProductsModalState } from '../../modules/redux/reducers/products/selectors';
import { IProduct } from '../../modules/redux/reducers/products/types';
import { getAllProductsSaga } from '../../modules/saga/products/actions';
import { setProductsModalStateAC } from '../../modules/redux/reducers/products/actions';
import { updateCartItemsSaga } from '../../modules/saga/cart/actions';
import { SubCategories } from '../../components/subCategories';
import { Products } from '../../components/products';
import { ProductModal } from '../../components/productModal';

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
        <Box sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            {isLoading ? <LinearProgress sx={{ width: '100%' }} /> : null}
            <Box sx={{
                transition: 'all 0.3s',
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                paddingBottom: '20px'
            }}>
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