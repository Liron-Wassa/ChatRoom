import { ChatContxet } from '../../contexts/ChatContext';
import classes from './Registration.module.css';
import { Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

const Registration = () => {

    const { emitName, name } = useContext(ChatContxet);

    let userName = "";

    const handleChange = (e) => {
        userName = e.target.value;
    };

    return (
        <React.Fragment>
            {name ? <Redirect to={"/chatroom"} /> : null}
            <div className={classes.Registration}>
                <h1>Chat Room</h1>
                <div>
                    <input type="text" placeholder="Enter a name" onChange={handleChange}/>
                    <br/>
                    <br/>
                    <button onClick={() => emitName(userName)}>Send</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registration;