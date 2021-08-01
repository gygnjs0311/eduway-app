import React, { Component, useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment, con, Label, Input, Popup } from 'semantic-ui-react';
import { BrowserRouter as Router, withRouter, Redirect, Switch, Route, Link, BrowserRouter } from "react-router-dom";

class LogInPage extends Component {

    funcRegister = e => {        
        window.sessionStorage.setItem("loginFlag", "Y");
        const loginFlag = window.sessionStorage.getItem("loginFlag");        
        //this.props.history.push('/');
        alert("Login Success!");
        window.location = "/";
    };

    funcMoveSignUpPage = e => {        
       window.location = "/SignUpPage";
    };
    
    render() {

        //const { PopupExampleFlowing } = PopupExampleFlowing;

        return (
            // <Grid textAlign='center' img src="./app1.png" style={{ height: '100vh', background: '#D5D5D5'}} verticalAlign='middle'>
            <Grid textAlign='center'  style={{ width:'50vh', height: '100vh', background: '#D5D5D5'}} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='/logo.png' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large' onClick={this.funcRegister}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to="" onClick={this.funcMoveSignUpPage}>Sign Up</Link>
                    {/* New to us? 

                    <Popup on='click' trigger={ <a href='#'> Sign Up </a>} flowing hoverable>
                        <Grid centered divided columns={3}>
                        <Grid.Column textAlign='center'>
                            <Header as='h4'>Basic Plan</Header>
                            <p>
                            <b>2</b> projects, $10 a month
                            </p>
                            <Button>Choose</Button>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Header as='h4'>Business Plan</Header>
                            <p>
                            <b>5</b> projects, $20 a month
                            </p>
                            <Button>Choose</Button>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Header as='h4'>Premium Plan</Header>
                            <p>
                            <b>8</b> projects, $25 a month
                            </p>
                            <Button>Choose</Button>
                        </Grid.Column>
                        </Grid>
                    </Popup> */}

                </Message>
                </Grid.Column>

            </Grid>            
            
        )
    }
}

export default withRouter(LogInPage);
