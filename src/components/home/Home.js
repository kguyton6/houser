import React, { Component } from 'react'
import houser from './houser.png'
import './home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            disabled: true
        }
    }

 

    handleUserName(value){
        this.setState({username: value  })
    }

    handlePassWord(value){
        this.setState({password:value,
                       disabled: false})
    }


    handleLogin(){
        axios.post(`/api/login`, {username: this.state.username, 
            password: this.state.password })
        .then( ( response ) =>  {
          if (response.status === 200){
              alert('Login Successful!')
            this.props.history.push('/dashboard')} 

         })
    .catch(response => response.status = alert('duplicate username or incorrect password'))
       
    }



    render(){
        return (
            <div className='home-container'>
            <div className='img-box'>
            <img src={houser} alt='logo' className='houser'/>
            </div>
                <div className='login-inputs'>
            Username
            <input className='home-input' onChange={ (e) => this.handleUserName(e.target.value)}/>
            Password
            <input className='home-input' type='password' onChange={(e) => this.handlePassWord(e.target.value)}/>
            </div>
            <div className='home-buttons'>

            <button disabled={this.state.disabled} className='login' onClick={() => this.handleLogin()}>Login</button>
           
            <Link to='/register' ><button className='register'>Register</button></Link>:

        
            
               
           
            </div>
        </div>
        )

    }
}

export default Home