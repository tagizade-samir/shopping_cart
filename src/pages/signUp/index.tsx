import { Box } from '@mui/system';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainButton from '../../components/mainButton';
import { AppDispatch } from '../../modules/redux';
import { selectIsUserAuthorized } from '../../modules/redux/reducers/user/selectors';
import { setUserSaga } from '../../modules/saga/user/actions';

const SignUp: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);
    const router: NextRouter = useRouter();

    const handleImitateSignUp = () => {
        dispatch(setUserSaga(true));
    }

    useEffect(() => {
        if (isUserAuthorized) {
            router.push('/');
        }
    }, [isUserAuthorized]);

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '50px' }}>
            <MainButton variant='contained' title='Imitate sign up' onClick={handleImitateSignUp} />
        </Box>
    );
}

export default SignUp;