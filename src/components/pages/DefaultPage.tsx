import React from 'react';
import Divider from '../atoms/Divider';
import Text from '../atoms/Text';
import Paragraph from '../atoms/Paragraph';
import Title from '../atoms/Title';
import Alert from '../molecules/Alert';
import Button from '../atoms/Button';
import ListAddons from '../templates/ListAddons';
import DefaultPlaceholderText from '../organisms/DefaultPlaceholderText';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const DefaultPage: React.SFC = (props: unknown) => (
  <div className="App">
    <header className="App-header">
      <Title>
        <img src={logo} className="App-logo" alt="logo" />
      </Title>
      <Paragraph>
        Edit <code>src/App.tsx</code> and save to reload.
      </Paragraph>
      <Router>
        <Switch>
          <Route path={['/', '/showAddOns']} exact={true}>
            <ListAddons />
            <Button>
              <Link to="/hideAddOns">Hide AddOns</Link>
            </Button>
          </Route>
          <Route path="/hideAddOns">
            <Paragraph>
              <Alert
                actions={[
                  {
                    content: (
                      <Button>
                        <Link to="/showAddOns">Show AddOns</Link>
                      </Button>
                    ),
                    primary: true,
                  },
                ]}
                info={true}
                content={
                  <React.Fragment>
                    <Paragraph>
                      <Text>AddOns Hidden</Text>
                    </Paragraph>
                  </React.Fragment>
                }
              />
            </Paragraph>
          </Route>
        </Switch>
      </Router>
      <Divider important={true} />
      <DefaultPlaceholderText />
    </header>
  </div>
);

export default DefaultPage;
