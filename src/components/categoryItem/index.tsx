import React, { FC } from 'react';
import { useTheme } from '@mui/system';
import { useRouter } from 'next/router';
import { Paper, Theme, Typography } from '@mui/material';

import { getStyles } from './index.style';
import { ICategory } from '../../modules/redux/reducers/categories/types';

interface ICategoryItem {
    item: ICategory;
}

export const CategoryItem: FC<ICategoryItem> = ({ item }) => {
    const router = useRouter();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

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