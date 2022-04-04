import React, { FC, useEffect } from 'react';
import { Box } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../modules/redux';
import MainButton from '../../components/mainButton';
import { setUserSaga } from '../../modules/saga/user/actions';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import { selectIsUserAuthorized } from '../../modules/redux/reducers/user/selectors';

const SignUp: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);
    const router: NextRouter = useRouter();

    const handleImitateSignUp = () => {
        dispatch(setDrawerStateAC(false));
        dispatch(setUserSaga(true));
    }

    useEffect(() => {
        if (isUserAuthorized) {
            router.push('/categories');
        }
    }, [isUserAuthorized]);

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '50px' }}>
            <MainButton variant='contained' title='Imitate sign up' onClick={handleImitateSignUp} />
        </Box>
    );
}

export default SignUp;