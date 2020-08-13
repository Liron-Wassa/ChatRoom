import { ChatContext } from '../../../../contexts/ChatContext';
import classes from './Humburger.module.css';
import React, { useContext } from 'react';

const Humburger = () => {

    const { show, setShow } = useContext(ChatContext);

    return (
        <div className={classes.Humburger} onClick={() => setShow(!show)}>
            {/* <div onClick={() => setShow(!show)}> */}
                <span></span>
                <span></span>
                <span></span>
            {/* </div> */}
        </div>
    );
};

export default Humburger;