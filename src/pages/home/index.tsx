import React, { FC } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

import { getStyles } from '../style';
import { Utils } from '../../services/utils';
import Image from '../../assets/images/mainBG.jpg';
import MainButton from '../../components/mainButton';

const Home: FC<{}> = () => {
    const router: NextRouter = useRouter();
    const styles = getStyles();

    const handleGoToCategories = () => {
        router.push(Utils.ROUTES.categories);
    }

    return(
        <>
            <Box sx={{ ...styles.homeBackground, backgroundImage: `url(${Image.src})` }} />
            <Box sx={styles.homeWrapper}>
                <Typography variant='h2'>
                    Hungry? Check out our restaurant
                </Typography>
                <MainButton
                    title='Go to menu'
                    variant='outlined'
                    onClick={handleGoToCategories} />
            </Box>
        </>
    )
};

export default Home;