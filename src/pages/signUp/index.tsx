import React, { FC, useEffect } from 'react';
import { Box } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { getStyles } from '../style';
import { Utils } from '../../services/utils';
import { AppDispatch } from '../../modules/redux';
import MainButton from '../../components/mainButton';
import { setUserSaga } from '../../modules/saga/user/actions';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import { selectIsUserAuthorized } from '../../modules/redux/reducers/user/selectors';

const SignUp: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);
    const router: NextRouter = useRouter();
    const styles = getStyles();

    const handleImitateSignUp = () => {
        dispatch(setDrawerStateAC(false));
        dispatch(setUserSaga(true));
    }

    useEffect(() => {
        if (isUserAuthorized) {
            router.push(Utils.ROUTES.categories);
        }
    }, [isUserAuthorized]);

    return(
        <Box sx={styles.signUpWrapper}>
            <MainButton variant='contained' title='Imitate sign up' onClick={handleImitateSignUp} />
        </Box>
    );
}

export default SignUp;