import React, { FC, ReactElement, SyntheticEvent } from 'react';
import { Button } from '@mui/material';

import { getStyles } from './index.style';

interface MainButtonProps {
    title?: string | Element;
    icon?: ReactElement;
    variant?: "text" | "outlined" | "contained";
    onClick: (e: SyntheticEvent) => void;
    color?: "inherit" | "success" | "primary" | "secondary" | "error" | "info" | "warning" | undefined;
}

const MainButton: FC<MainButtonProps> = ({ title, variant = 'text', onClick, icon, color }) => {
    const styles = getStyles(variant);
    return(
        <Button
            color={color || 'primary'}
            sx={styles.rootWrapper}
            variant={variant}
            onClick={onClick}>
                {icon}
                {title}
        </Button>
    );
}

export default MainButton;