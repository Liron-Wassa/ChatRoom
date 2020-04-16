import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import ChatContextProvider from './contexts/ChatContext';
import Chat from './components/Chat/Chat';
import Layout from './hoc/LayOut/LayOut';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
          <ChatContextProvider>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Registration} />
                    <Route exact path="/chatroom" component={Chat}/>
                </Switch>
            </Layout>
          </ChatContextProvider>
    </BrowserRouter>
  );
}

export default App;