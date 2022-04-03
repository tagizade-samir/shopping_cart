import React, { FC, ReactElement, SyntheticEvent } from 'react';
import { Button } from '@mui/material';
import { getStyles } from './index.style';

interface MainButtonProps {
    title?: string;
    icon?: ReactElement;
    variant?: "text" | "outlined" | "contained",
    onClick: (e: SyntheticEvent) => void,
}

const MainButton: FC<MainButtonProps> = ({ title, variant = 'text', onClick, icon }) => {
    const styles = getStyles(variant);
    return(
        <Button
            sx={styles.rootWrapper}
            variant={variant}
            onClick={onClick}>
                {icon}
                {title}
        </Button>
    );
}

export default MainButton;