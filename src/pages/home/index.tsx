import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

import Image from '../../assets/images/mainBG.jpg';
import MainButton from '../../components/mainButton';

const Home: FC<{}> = () => {
    const router = useRouter();

    const handleGoToCategories = () => {
        router.push('/categories');
    }

    return(
        <>
            <Box sx={{
                display: 'flex',
                flex: 1,
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'blur(4px)',
                backgroundImage: `url(${Image.src})`
                }} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                flexDirection: 'column',
                gap: 2
            }}>
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