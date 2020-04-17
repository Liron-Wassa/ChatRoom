import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import React from 'react';

const Layout = (props) => {

    return (
        <React.Fragment>
            <SideDrawer />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
    
};

export default Layout;