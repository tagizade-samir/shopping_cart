import React, { FC, useMemo } from 'react';
import Popover from '@mui/material/Popover';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'src/modules/redux/reducers/cart/selectors';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getStyles } from './index.style';
import { CartContent } from './components/cartContent';

interface CartPopoverProps {
    isOpen: boolean;
    anchor: any;
    handleCloseCart: () => void;
}

export const CartPopover: FC<CartPopoverProps> = ({ isOpen, anchor, handleCloseCart }) => {
    const { items } = useSelector(selectCartItems);
    const styles = getStyles();

    const content = useMemo(() => {
        return items.length
            ? <CartContent items={items} />
            : <Typography>Your cart is empty</Typography>
    }, [items]);

    return(
        <Popover
            open={isOpen}
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            onClose={handleCloseCart} >
                <Box sx={styles.rootWrapper}>
                    {content}
                </Box>
        </Popover>
    );
}