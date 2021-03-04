import React, { Component } from 'react';

class LogIn extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)

    }

    usernameChange(user) {
        this.setState({ username: user })
    }

    passwordChange(pass) {
        this.setState({ password: pass })
    }

    handleChange() {
        alert(`Username:${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>

                <input onChange={e => this.usernameChange(e.target.value)} />
                <input onChange={e => this.passwordChange(e.target.value)} />
                <button onClick={this.handleChange}>Login</button>

            </div>
        )
    }




}

export default LogIn