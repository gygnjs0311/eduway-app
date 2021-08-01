import React, { Component, useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment, con, Label, Input } from 'semantic-ui-react';
import { BrowserRouter as Router, withRouter, Redirect, Switch, Route, Link, BrowserRouter } from "react-router-dom";

class SignUpPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            team: '',
            email: '',
            pwds: '',
            redirect: false,
            isError: {
                name: '',
                team: '',
                email: '',
                pwds: ''
            }
        }

    }

    render() {

        const { redirect } = this.state;
        const { isError } = this.state;

        return (
            <Grid textAlign='center'  style={{ width:'50vh', height: '100vh', background: '#D5D5D5'}} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <i aria-hidden="true" className="address card outline mini icon"></i>회원가입                                
                    </Header>
                    <Form size='large'>                    
                        <Segment stacked>
                        <Form.Field >
                            <label>이름</label>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='이름을 입력해 주세요' />
                        </Form.Field>
                        <Form.Field >
                            <label>비밀번호</label>
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='비밀번호를 입력해 주세요'
                                type='password'
                            />  
                        </Form.Field>
                        <Form.Field >
                            <label>이메일</label>
                            <Form.Input
                                fluid
                                icon='mail icon'
                                iconPosition='left'
                                placeholder='메일주소를 입력해 주세요'
                            />  
                        </Form.Field>

                        <Button color='teal' fluid size='large' onClick={this.funcRegister}>
                            등록
                        </Button>

                        </Segment>
                    </Form>               
                </Grid.Column>
            </Grid>            
        )
    }
}

export default withRouter(SignUpPage);