import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

import { styles } from './index.style';
import Image from '../../assets/images/mainBG.jpg';
import MainButton from '../../components/mainButton';

const Home: FC<{}> = () => {
    const router = useRouter();

    const handleGoToCategories = () => {
        router.push('/categories');
    }

    return(
        <>
            <Box sx={{...styles.backgroundWrapper, backgroundImage: `url(${Image.src})`}} />
            <Box sx={styles.mainWrapper}>
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