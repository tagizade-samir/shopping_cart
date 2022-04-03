import { Box, LinearProgress } from '@mui/material';
import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../modules/redux';
import { selectCategories, selectIsLoading } from '../../modules/redux/reducers/categories/selectors';
import { ICategory } from '../../modules/redux/reducers/categories/types';
import { getAllCategoriesSaga } from '../../modules/saga/categories/actions';

import { CategoryItem } from './components/categoryItem';

const Categories: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const categories: Array<ICategory> = useSelector(selectCategories);
    const isLoading: boolean = useSelector(selectIsLoading);

    useEffect(() => {
        /* TODO: Ask whether should I retrieve data everytime user comes to this page, or only when data is empty */
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