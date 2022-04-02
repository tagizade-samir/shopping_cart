import React, { FC, ReactElement } from 'react';
import { Button } from '@mui/material';

interface MainButtonProps {
    title?: string;
    icon?: ReactElement;
    variant?: "text" | "outlined" | "contained",
    onClick: () => void,
}

const MainButton: FC<MainButtonProps> = ({ title, variant = 'text', onClick, icon }) => {
    return(
        <Button sx={{ transition: 'all 0.6s' }} variant={variant} onClick={onClick}>
            {icon}
            {title}
        </Button>
    );
}

export default MainButton;