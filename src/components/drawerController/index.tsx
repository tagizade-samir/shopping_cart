import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/modules/redux';
import { Utils } from 'src/services/utils';

interface DrawerControllerProps {
    children: Array<any>;
}

const DrawerController: FC<DrawerControllerProps> = ({ children }) => {
    const isDrawerOpen: boolean = useSelector((state: RootState) => state.app.isDrawerOpen);

    return(
        <div style={{
            marginLeft: isDrawerOpen ? Utils.CONSTANTS.drawerWidth : 0,
            transition: 'all 0.3s'
        }}>
            {children}
        </div>
    );
}

export default DrawerController;