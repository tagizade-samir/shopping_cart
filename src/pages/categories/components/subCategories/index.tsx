import React, { FC, useCallback } from 'react';
import { Box } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';

import { ISubCategory } from 'src/modules/redux/reducers/subCategories/types';
import { styles } from './index.style';
import { SubCategoryItem } from '../subCategoryItem';
import { selectSelectedSubCategory } from 'src/modules/redux/reducers/subCategories/selectors';
import { AppDispatch } from 'src/modules/redux';
import { setSelectedSubCategoryDataAC } from 'src/modules/redux/reducers/subCategories/actions';

interface SubCategoriesProps {
    list: Array<ISubCategory> | [];
}

export const SubCategories: FC<SubCategoriesProps> = ({ list }) => {
    const selectedSubCategory: number = useSelector(selectSelectedSubCategory);
    const firstSubCategory = { id: 0, name: 'All' } as ISubCategory;
    const dispatch: AppDispatch = useDispatch();

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