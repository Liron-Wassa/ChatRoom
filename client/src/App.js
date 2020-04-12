import { BrowserRouter } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Layout from './hoc/LayOut/LayOut';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Chat />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;