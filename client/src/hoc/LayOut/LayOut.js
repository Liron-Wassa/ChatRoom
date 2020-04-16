import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import { ChatContxet } from '../../contexts/ChatContext';
import React, { useState, useContext } from 'react';

const Layout = (props) => {

    const { name } = useContext(ChatContxet);

    const [show, setShow] = useState(false);

    const change = () => {        
        setShow(!show);
    }

    return (
        <React.Fragment>
            {name ? <ToolBar change={change}/> : null}
            <SideDrawer show={show} change={change}/>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
    
};

export default Layout;