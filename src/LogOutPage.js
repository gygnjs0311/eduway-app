import React, { Component, useState } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment, con, Label, Input } from 'semantic-ui-react';
import { BrowserRouter as Router, withRouter, Redirect, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import * as config from './config';
import { history } from './index';
import PropTypes from 'prop-types';



class SignOutPage extends Component {

    componentDidMount() {
        alert("LogOut Success!");
        window.sessionStorage.clear();        
        window.location = "/"; 
    }

    render() {

        return <Redirect to='/' />; 

    }
}

export default withRouter(SignOutPage);