import React, { FC, SyntheticEvent, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Box, useTheme } from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import { Popper, Theme, Typography, useMediaQuery } from '@mui/material';

import { getStyles } from './index.style';
import MainIconButton from '../mainIconButton';
import { CartContent } from './components/cartContent';
import { IProduct } from '../../modules/redux/reducers/products/types';
import { selectCartItems } from '../../modules/redux/reducers/cart/selectors';

interface CartPopoverProps {
    isOpen: boolean;
    anchor: any;
    handleToggleCart: (e: SyntheticEvent) => void;
}

export const CartPopover: FC<CartPopoverProps> = ({ isOpen, anchor, handleToggleCart }) => {
    const theme: Theme = useTheme();
    const items: Array<IProduct> | [] = useSelector(selectCartItems);
    const matches = useMediaQuery(theme.breakpoints.down(items.length ? 500 : 350));
    const styles = getStyles(theme, items.length);

    const content = useMemo(() => {
        return items.length
            ? <CartContent items={items} />
            : <Typography sx={{display: 'flex', flex: 1, alignItems: 'center'}}>Your cart is empty</Typography>
    }, [items]);

    const rightOffsetCart = useMemo(() => {
        if (items.length) {
            return matches ? 0 : -120;
        } else {
            return matches ? 0 : -20;
        }
    }, [items.length, matches]);

    return(
        <Popper
            open={isOpen}
            anchorEl={anchor}
            sx={{ zIndex: 10 }}
            placement='bottom'
            modifiers={[
                {
                    name: 'flip',
                    enabled: true,
                    options: {
                      altBoundary: true,
                      rootBoundary: 'document',
                    },
                },
                {
                    name: 'preventOverflow',
                    enabled: false,
                    options: {
                      altAxis: true,
                      altBoundary: true,
                      tether: true,
                      rootBoundary: 'document',
                    },
                },
                {
                    name: "offset",
                    options: {
                      offset: [rightOffsetCart, 0],
                    },
                },
            ]} >
                <Box sx={{...styles.rootWrapper, boxShadow: 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <Box sx={styles.headerWrapper}>
                        <Typography variant='h6' sx={{marginLeft: '10px'}}>Cart</Typography>
                        <MainIconButton title='Close' onClick={handleToggleCart} icon={<ClearIcon />} />
                    </Box>
                    {content}
                </Box>
        </Popper>
    );
}