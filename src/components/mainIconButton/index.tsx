import React, { FC, ReactElement, SyntheticEvent } from 'react';
import { Button, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

import { styles } from './index.style';
import { Utils } from '../../services/utils';

interface MainIconButtonProps {
    title: string | ReactElement;
    icon: ReactElement;
    onClick: (e: SyntheticEvent) => void,
}

const MainIconButton: FC<MainIconButtonProps> = ({ title, onClick, icon }) => {
    const theme: Theme = useTheme();
    const matches: boolean = useMediaQuery(theme.breakpoints.down(Utils.CONSTANTS.headerChangeWidth));

    return(
        <Button sx={styles.wrapper} variant={'text'} onClick={onClick}>
            {matches
                ? <Typography className='title'>
                    {title}
                </Typography>
                : icon}
        </Button>
    );
}

export default MainIconButton;