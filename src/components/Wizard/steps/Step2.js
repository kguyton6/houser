import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import head_title from '../head_title.png'
import './steps.css'
import active from '../step_active.png'
import inactive from '../step_inactive.png'
import complete from '../step_completed.png'
import { connect } from 'react-redux'



class Step2 extends Component {
    
    render() {
        const {addAddress, addCity, addState, addZip} = this.props
        return (
            <div className='App'>
                <div className='dashboard-header'>
                    <img className='head_title' src={head_title} alt='header' />
                    <Link to='/home' className='logout'>Logout</Link>
                </div>
                <div className='wizard-container'>
                    <span className='top-container'>
                        Add New Listing
           <Link to='/dashboard' ><button className='cancel'>Cancel</button></Link>
                    </span>
                    <div className='steps'>
                        <span className='step-location'> Step 2</span>
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={active} alt='active' />
                        <img className='step-logo' src={inactive} alt='inactive' />
                        <img className='step-logo' src={inactive} alt='inactive' />
                        <img className='step-logo' src={inactive} alt='inactive' />
                    </div>
                    <div className='wizard-main'>
                        <div className='inputs-step4'>
                            Address
            <input className='address' value={this.props.address} onChange={(e) => addAddress(e.target.value)} />
                            <div className='city-state'>

                                <div className='city-box'>City
                            <input className='city' value={this.props.city}onChange={(e) => addCity(e.target.value)} /></div>
                                <div className='state-box'>State
                            <input className='state' value={this.props.State}onChange={(e) => addState(e.target.value)} /></div>
                            </div>
                            Zipcode
            <input className='zipcode' type='number' value={this.props.zipcode}onChange={(e) => addZip(e.target.value)} />
                        </div>

                    <div className='button-container'>
                        <Link to='/step/1' ><button className='previous'>Previous Step</button></Link>
                        <Link to='/step/3' ><button className='next'>Next Step</button></Link>
                    </div>
                </div>
      
            </div>

            </div>


        )
    }
}
export function mapStateToProps(state){
    console.log(state)
    return {
        address: state.address,
        city: state.city, 
        State: state.State, 
        zipcode: state.zipcde,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addAddress: address => dispatch({type: 'ADD_ADDRESS', payload: address}),
        addCity: city => dispatch ({type: 'ADD_CITY', payload: city}), 
        addState: State => dispatch ({type: 'ADD_STATE', payload: State}),
        addZip: zipcode => dispatch ({type: 'ADD_ZIP', payload: zipcode})
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Step2)