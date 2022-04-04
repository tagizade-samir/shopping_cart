import React, { FC, useCallback } from 'react';
import { Theme } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';

import { getStyles } from './index.style';
import { AppDispatch } from '../../modules/redux';
import { SubCategoryItem } from '../subCategoryItem';
import { ISubCategory } from '../../modules/redux/reducers/subCategories/types';
import { selectSelectedSubCategory } from '../../modules/redux/reducers/subCategories/selectors';
import { setSelectedSubCategoryDataAC } from '../../modules/redux/reducers/subCategories/actions';

interface SubCategoriesProps {
    list: Array<ISubCategory> | [];
}

export const SubCategories: FC<SubCategoriesProps> = ({ list }) => {
    const dispatch: AppDispatch = useDispatch();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);
    const selectedSubCategory: number = useSelector(selectSelectedSubCategory);
    const firstSubCategory = { id: 0, name: 'All' } as ISubCategory;

    const handleChangeSubCategory = useCallback((id: number) => {
        dispatch(setSelectedSubCategoryDataAC(id));
    }, [dispatch]);

    return(
        <Box sx={styles.rootWrapper}>
            {list.length
                ? [firstSubCategory, ...list].map((item: ISubCategory) => (
                        <SubCategoryItem
                            key={item.id}
                            onClick={handleChangeSubCategory}
                            isSelected={item.id === selectedSubCategory}
                            item={item} />
                    ))
                : null}
        </Box>
    );
}