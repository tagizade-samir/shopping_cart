import React, { FC, ReactElement } from 'react';
import { Button, Typography } from '@mui/material';
import { styles } from './index.style';

interface MainIconButtonProps {
    title: string;
    icon: ReactElement;
    onClick: () => void,
}

const MainIconButton: FC<MainIconButtonProps> = ({ title, onClick, icon }) => {
    return(
        <Button sx={styles.wrapper} variant={'text'} onClick={onClick}>
            {icon}
            <Typography className='title'>
                {title}
            </Typography>
        </Button>
    );
}

export default MainIconButton;