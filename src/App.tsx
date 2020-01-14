import React from 'react';
import { Typography, Divider, Button, Alert } from 'antd';
import Addons from './components/Addons';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <header className="App-header">
            <Title>
              <img src={logo} className="App-logo" alt="logo" />
            </Title>
            <Paragraph>
              Edit <code>src/App.tsx</code> and save to reload.
            </Paragraph>
            <Divider dashed={true} />
            <Route path={['/', '/showAddOns']} exact={true}>
              <Addons />
              <Button>
                <Link to="/hideAddOns">Hide AddOns</Link>
              </Button>
            </Route>
            <Route path="/hideAddOns">
              <Paragraph>
                <Alert
                  banner={true}
                  type="info"
                  message={
                    <React.Fragment>
                      <Paragraph>
                        <Text>AddOns Hidden</Text>
                      </Paragraph>
                    </React.Fragment>
                  }
                />
              </Paragraph>
              <Button>
                <Link to="/showAddOns">Show AddOns</Link>
              </Button>
            </Route>
            <Divider dashed={true} />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
