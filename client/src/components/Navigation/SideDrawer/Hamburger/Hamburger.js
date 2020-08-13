import { ChatContext } from '../../../../contexts/ChatContext';
import classes from './Humburger.module.css';
import React, { useContext } from 'react';

const Humburger = () => {

    const { show, setShow } = useContext(ChatContext);

    return (
        <div className={classes.Humburger}>
            <div onClick={() => setShow(!show)}>
                <div>f</div>
                <div>f</div>
                <div>f</div>
            </div>
        </div>
    );
};

export default Humburger;