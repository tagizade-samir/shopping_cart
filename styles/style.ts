export const getStyles = () => ({
    subCategoriesWrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    subCategoriesContent: {
        transition: 'all 0.3s',
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        paddingBottom: '20px'
    },
    categoriesWrapper: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    confirmOrderWrapper: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: 10,
        gap: 3
    },
    homeWrapper: {
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
    },
    homeBackground: {
        display: 'flex',
        flex: 1,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'blur(4px)',
    },
    profileWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '50px'
    },
    signUpWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '50px'
    }
});