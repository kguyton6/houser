import React, { Component } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import head_title from './head_title.png'
import houser from './houser.png'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            disabled: true
        }
    }



    firstName(value) {
        this.setState({ firstName: value })
    }

    lastName(value) {
        this.setState({ lastName: value })
    }

    handleUserName(value) {
        this.setState({ username: value })
    }

    handlePassWord(value) {
        this.setState({ password: value })
    }

    handleSubmit() {
        axios.post(`/api/register`, {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        })
            .then((response) => {
                if (response.status === 200) {
                    alert('User Successfully registered')
                    this.props.history.push('/home')
                }
            })
            .catch(response => response.status = alert('registration failed'))

    }




    render() {
        return (
            <div className='register-container'>
                <div className='register-header'>

                        <img className='head_title' src={head_title} alt='header' />

                    <Link to='/home' className='logout'>Cancel</Link>
                </div>
                <div className='title' >Create Houser Account</div>
                <div className='register-main'>
                    <div className='main-img'>
                        <img className='houser' src={houser} alt='house' />
                    </div>
                    <div className='login-inputs'>
                        <input placeholder='first name' className='register-input' onChange={(e) => this.firstName(e.target.value)} />
                        <input placeholder='last name' className='register-input' onChange={(e) => this.lastName(e.target.value)} />
                        <input placeholder='create username' className='register-input' onChange={(e) => this.handleUserName(e.target.value)} />
                        <input placeholder='create password' className='register-input' onChange={(e) => this.handlePassWord(e.target.value)} />
                    </div>
                </div>
                {this.state.length === null ?
                    <button className='submit' disabled={this.state.disabled} type='submit' onClick={() => this.handleSubmit()}>Submit</button> :
                    <button className='submit' type='submit' onClick={() => this.handleSubmit()}>Submit</button>}
            </div>
        )
    }
}

export default Register