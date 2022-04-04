import React, { FC } from 'react';
import { Box } from '@mui/system';

import MainButton from '../mainButton';
import { ISubCategory } from '../../modules/redux/reducers/subCategories/types';

interface SubCategoryItemProps {
    item: ISubCategory;
    isSelected: boolean;
    onClick: (id: number) => void;
}

export const SubCategoryItem: FC<SubCategoryItemProps> = ({ item, isSelected, onClick }) => {
    return(
        <Box>
            <MainButton variant={isSelected ? 'outlined' : 'contained'} title={item.name} onClick={() => onClick(item.id)} />
        </Box>
    );
}