import React, { FC } from 'react';
import { useTheme } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import { Paper, Theme, Typography } from '@mui/material';

import { getStyles } from './index.style';
import { Utils } from '../../services/utils';
import { ICategory } from '../../modules/redux/reducers/categories/types';

interface ICategoryItem {
    item: ICategory;
}

export const CategoryItem: FC<ICategoryItem> = ({ item }) => {
    const router: NextRouter = useRouter();
    const theme: Theme = useTheme();
    const styles = getStyles(theme);

    const handleClickItem = () => {
        router.push(`${Utils.ROUTES.categories}/${item.url}`);
    }

    return(
        <Paper elevation={4} sx={styles.root} {...{ onClick: handleClickItem }}>
            <Typography sx={styles.title} variant='h5'>
                {item.name}
            </Typography>
        </Paper>
    );
}