import React, { FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { getStyles } from '../style';
import { Utils } from '../../services/utils';
import { AppDispatch } from '../../modules/redux';
import MainButton from '../../components/mainButton';
import { setUserSaga } from '../../modules/saga/user/actions';
import { setDrawerStateAC } from '../../modules/redux/reducers/app/actions';
import { selectIsUserAuthorized } from '../../modules/redux/reducers/user/selectors';

const Profile: FC<{}> = () => {
    const router: NextRouter = useRouter();
    const dispatch: AppDispatch = useDispatch();
    const styles = getStyles();
    const isUserAuthorized: boolean = useSelector(selectIsUserAuthorized);

    useEffect(() => {
        if (!isUserAuthorized) {
            router.push(Utils.ROUTES.root);
        }
    }, [isUserAuthorized]);

    const handleImitateLogOut = () => {
        dispatch(setDrawerStateAC(false));
        dispatch(setUserSaga(false));
    }

    return(
        <Box sx={styles.profileWrapper}>
            <MainButton variant='contained' title='Imitate log out' onClick={handleImitateLogOut} />
        </Box>
    );
}

export default Profile;