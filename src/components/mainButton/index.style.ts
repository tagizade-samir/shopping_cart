export const getStyles = (variant: 'contained' | 'text' | 'outlined') => ({
    rootWrapper: {
        transition: 'all 0.6s',
        maxWidth: 500,
        width: variant === 'text' ? 'auto' : '100%',
    }
});