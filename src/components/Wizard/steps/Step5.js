import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import head_title from '../head_title.png'
import './steps.css'
import complete from '../step_completed.png'
import active from '../step_active.png'
import { connect } from 'react-redux'
import axios from 'axios'
import session from 'redux-react-session'

class Step5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            description: this.props.description,
            address: this.props.address,
            city: this.props.city,
            State: this.props.State,
            zipcode: this.props.zipcode,
            image: this.props.image,
            mortgage: this.props.mortgage,
            loan: this.props.loan,
            rent: this.props.rent
        }
        this.handleClick = this.handleClick.bind(this)

    }


    handleClick() {
        axios.post('/api/listings', {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address,
            city: this.state.city,
            State: this.state.State,
            zipcode: this.state.zipcode,
            image: this.state.image,
            mortgage: this.state.mortgage,
            loan: this.state.loan,
            rent: this.state.rent
        })
            .then((response) => {
                if (response.status === 200) {
                    alert('Listing Added Successfully')
                    this.props.history.push('/dashboard')
                }
            }
            )
    }

    render() {
        console.log(this.state)

        const { addRent } = this.props
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
                    <div className='wizard-main'>
                        <div className='steps'>
                            <span className='wizard-span'> Step 5</span><br />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={active} alt='active' />
                        </div>
                        <span className='rent-text'> Recommended Rent </span><br /><br /><br /><br />
                        <div className='inputs-step4'>
                            Desired Rent
            <input className='inputs' value={this.props.rent} onChange={(e) => addRent(e.target.value)} /></div>

                        <div className='button-container'>
                            <Link to='/step/4' ><button className='previous'>Previous Step</button></Link>
                            <Link to='/dashboard'> <button onClick={this.handleClick} className='complete'>Complete</button></Link>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        name: state.name,
        description: state.description,
        address: state.address,
        city: state.city,
        State: state.State,
        zipcode: state.zipcode,
        image: state.image,
        mortgage: state.mortgage,
        loan: state.loan,
        rent: state.rent
    }
}
const mapDispatchToProps = (dispatch) => ({
    addRent: rent => dispatch({ type: 'ADD_RENT', payload: rent })
})


export default connect(mapStateToProps, mapDispatchToProps)(Step5)