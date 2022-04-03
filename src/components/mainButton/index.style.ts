export const getStyles = (variant: 'contained' | 'text' | 'outlined') => ({
    rootWrapper: {
        transition: 'all 0.6s',
        maxWidth: 400,
        width: variant === 'text' ? 'auto' : '100%',
    }
});