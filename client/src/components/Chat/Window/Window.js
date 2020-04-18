import classes from './Window.module.css';
import Message from './Message/Message';
import React from 'react';

const Window = () => (
    <section className={classes.Window}>
        <div className={classes.message}>
            <Message />
        </div>
    </section>
);

export default Window;