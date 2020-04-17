import { ChatContext } from '../../../../contexts/ChatContext';
import { Redirect } from 'react-router-dom';
import classes from './ExitBtn.module.css';
import React, { useContext } from 'react';

const ExitBtn = () => {

    const { name, handleExit } = useContext(ChatContext);

    if(!name) {
        return <Redirect to="/" />
    }

    return (
        <div className={classes.ExitBtn} onClick={handleExit}>
            <span>Exit</span>
            <i className="fas fa-sign-out-alt"></i>
        </div>
    );
}

export default ExitBtn;