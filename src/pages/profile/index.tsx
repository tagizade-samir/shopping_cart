import { Box } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainButton from '../../components/mainButton';
import { AppDispatch } from '../../modules/redux';
import { selectIsUserAuthorized } from '../../modules/redux/reducers/user/selectors';
import { setUserSaga } from '../../modules/saga/user/actions';

const Profile: FC<{}> = () => {
    const dispatch: AppDispatch = useDispatch();
    const router: NextRouter = useRouter();
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);

    useEffect(() => {
        if (!isUserAuthorized) {
            router.push('/');
        }
    }, [isUserAuthorized]);

    const handleImitateLogOut = () => {
        dispatch(setUserSaga(false));
    }

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '50px' }}>
            <MainButton variant='contained' title='Imitate log out' onClick={handleImitateLogOut} />
        </Box>
    );
}

export default Profile;