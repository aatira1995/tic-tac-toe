import React from 'react';
import Game from './game';
import './index.css';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            name: '',
            password: '',
            error: false
        }
        this.handleInputChange =  this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
    }
    login() {
        if (!this.state.isLogged) {
            if (this.state.name === 'admin' && this.state.password === 'password') {
                this.setState({
                    isLogged: true,
                    error: false
                });
            } else {
                this.setState({
                    error: true
                })
            }
        } else {
            this.setState({
                isLogged: false,
                name: '',
                password: ''
            });
        }
       
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render() {
        let message, buttonText, errorMessage;
        if (this.state.isLogged) {
            message = 'Welcome user'
            buttonText = 'Logout'
        } else {
            message = 'Welcome guest'
            buttonText = 'Login'
        }

        if (this.state.error) {
            errorMessage = 'Please provide valid username and password'
        } else {
            errorMessage = ''
        }

        return (
        <div className="text-center">
            <div className="fs-70 message">{message}</div>
            {this.state.isLogged? 
            <Game />
            :  
            <form>
            <div>
            <div className="mt-10">
                <label className="label">
                    Username:
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange}
                    className="ml-20"/>
                </label>
            </div>
            <div className="mt-10">
                <label className="label">
                    Password:
                    <input type="text" id="password" name="password" value={this.state.password} onChange={this.handleInputChange}
                    className="ml-20"/>
                </label>
            </div>
            </div> 
            </form> 
            }
            
            <div className="mt-10">
                <button onClick={this.login} className="loginButton">{buttonText}</button>
            </div>
            <div className="errorMessage mt-10">{errorMessage}</div>
        </div>
        )
    }
}

export default Login;