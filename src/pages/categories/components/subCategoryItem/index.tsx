import { Box } from '@mui/system';
import React, { FC } from 'react';
import MainButton from 'src/components/mainButton';
import { ISubCategory } from 'src/modules/redux/reducers/subCategories/types';

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