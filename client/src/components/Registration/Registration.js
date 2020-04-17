import { ChatContext } from '../../contexts/ChatContext';
import classes from './Registration.module.css';
import { Redirect } from 'react-router-dom';
import React, { useContext } from 'react';

const Registration = () => {

    const { emitName, name } = useContext(ChatContext);

    let userName = "";

    const handleChange = (e) => {
        userName = e.target.value;
    };

    if(name) {
        return <Redirect to={"/chatroom"} />
    }

    return (
        <React.Fragment>
            <div className={classes.Registration}>
                <h1>Welcome To Chat Room</h1>
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