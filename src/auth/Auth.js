import React from 'react';
import {Container, Row, Col} from 'reactstrap'; //1
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => { //2
    console.log('Auth props', props)
    return(
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} /> {/*//1*/}
                </Col>
                 <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>  {/*//1*/}
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;
