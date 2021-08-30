import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; //1

    const Signup = (props) => {
        const [username, setUsername] = useState(''); //1
        const [password, setPassword] = useState(''); //2
        const [errormessage, setErrormessage] = useState('')

         const handleSubmit = (event) => { //1
                event.preventDefault();
                if(event.target.username){
                    //setErrormessage('user name is required')
                }
                 fetch("http://localhost:3000/user/register", { //1
                 method: 'POST', //2
                body: JSON.stringify({user:{username: username, password:password}}),
                headers: new Headers({ 'Content-Type': 'application/json' //4
                })
            }).then(
                (response) => response.json() //5
            ).then((data) => {
                props.updateToken(data.sessionToken) //6
                })
        }
        return(
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>  {/*//2*/}
                    <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} /> {/*//1*/}
                    <Label style={{color:"red"}} >{errormessage}</Label>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/> {/*//1*/}
                    </FormGroup>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </div>
        )
}
export default Signup;
