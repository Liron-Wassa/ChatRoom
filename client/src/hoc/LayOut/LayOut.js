import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import React, { useState } from 'react';

const Layout = (props) => {

    const [show, setShow] = useState(false);

    const change = () => {        
        setShow(!show);
    }

    return (
        <React.Fragment>
            <ToolBar change={change}/>
            <SideDrawer show={show} change={change}/>
            <main style={{height: "100vh"}}>
                {props.children}
            </main>
        </React.Fragment>
    );
    
};

export default Layout;