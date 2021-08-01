import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch,Redirect } from "react-router-dom";
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment} from 'semantic-ui-react'

import LogInPage from "./LogInPage";
import LogOutPage from "./LogOutPage";
import SignUpPage from "./SignUpPage";
import AlarmHistoryListPage from "./AlarmHistoryListPage";

export default function EduWayReactApplication() {

    const loginFlag = window.sessionStorage.getItem("loginFlag");        

    if (loginFlag == "" || loginFlag == null) {

      return (
        <BrowserRouter>                
          {/* <div style={{ backgroundImage: "url(/app2.png)", backgroundRepeat: 'no-repeat' }}> */}
          <div align="center">
            <Menu fixed='top' inverted>
              <Container>
                <Menu.Item as='a' header>
                  <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                  <Link to="/" >EduWay</Link> 
                </Menu.Item>
                {/* <Menu.Item as='a'>Home</Menu.Item> */}

                {/* <Dropdown item simple text='Dropdown'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                
              </Container>
            </Menu>
          
            <Switch>
              <Route exact path="/">
                <LogInPage />
              </Route> 
              <Route path="/SignUpPage">
                <SignUpPage />
              </Route> 
            </Switch>
          </div>
            
        </BrowserRouter>
      );

  }else{

    return (
      <BrowserRouter>                
        {/* <div style={{ backgroundImage: "url(/app2.png)", backgroundRepeat: 'no-repeat' }}> */}
        <div align="center">
          <Menu fixed='top' inverted>
            <Container>
              <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                EduWay
              </Menu.Item>
              {/* <Menu.Item as='a'>알람</Menu.Item> */}

              <Dropdown item simple text='Alarm'>
                <Dropdown.Menu>
                  {/* <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Divider /> */}
                  {/* <Dropdown.Header>Alarm</Dropdown.Header> */}
                  {/* <Dropdown.Item>
                    <i className='dropdown icon' />
                    <span className='text'>Submenu</span>
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item> */}
                  <Dropdown.Item>History List</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Menu position='right'>                
                <Menu.Item as='a'><Link to="/LogOutPage">LogOut</Link></Menu.Item>
              </Menu.Menu>
              
            </Container>
          </Menu>
        
          <Switch>
            <Route exact path="/">
              <AlarmHistoryListPage />
            </Route>   
            <Route path="/LogOutPage">
              <LogOutPage />
            </Route> 
          </Switch>
        </div>
          
      </BrowserRouter>
    );
  }
}

