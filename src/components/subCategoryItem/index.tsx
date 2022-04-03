import { Box } from '@mui/system';
import React, { FC } from 'react';
import { ISubCategory } from '../../modules/redux/reducers/subCategories/types';
import MainButton from '../mainButton';

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