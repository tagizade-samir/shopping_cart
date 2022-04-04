import React, { FC, useEffect, useMemo } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../modules/redux';
import { CategoryItem } from '../../components/categoryItem';
import { ICategory } from '../../modules/redux/reducers/categories/types';
import { getAllCategoriesSaga } from '../../modules/saga/categories/actions';
import { selectCategories, selectIsLoading } from '../../modules/redux/reducers/categories/selectors';

const Categories: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const categories: Array<ICategory> = useSelector(selectCategories);
    const isLoading: boolean = useSelector(selectIsLoading);

    useEffect(() => {
        if (!categories.length) {
            dispatch(getAllCategoriesSaga());
        }
    }, [dispatch, categories]);

    const content = useMemo(() => {
        if (isLoading) return <LinearProgress sx={{ width: '100%' }} />;

        return categories.length
            ? categories.map((category: ICategory) => <CategoryItem item={category} key={category.id} />)
            : null;
    }, [isLoading, categories]);

    return(
        <Box sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {content}
        </Box>
    );
}

export default Categories;