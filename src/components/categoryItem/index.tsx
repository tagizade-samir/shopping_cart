import { Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { ICategory } from '../../modules/redux/reducers/categories/types';
import { styles } from './index.style';

interface ICategoryItem {
    item: ICategory;
}

export const CategoryItem: FC<ICategoryItem> = ({ item }) => {
    const router = useRouter();

    const handleClickItem = () => {
        router.push(`/categories/${item.url}`);
    }

    return(
        <Paper elevation={4} sx={styles.root} {...{ onClick: handleClickItem }}>
                <Typography sx={styles.title} variant='h5'>
                    {item.name}
                </Typography>
        </Paper>
    );
}