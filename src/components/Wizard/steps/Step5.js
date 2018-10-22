import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import head_title from '../head_title.png'
import './steps.css'
import complete from '../step_completed.png'
import active from '../step_active.png'
import { connect } from 'react-redux'
import axios from 'axios'


class Step5 extends Component {
    constructor(props) {
        super(props)


        this.handleClick = this.handleClick.bind(this)

    }


    handleClick() {
        console.log(this.state)
        axios.post('/api/listings', {
            property_name: this.props.property_name,
            description: this.props.description,
            address: this.props.address,
            city: this.props.city,
            State: this.props.State,
            zipcode: this.props.zipcode,
            image_url: this.props.image_url,
            loan_amount: this.props.loan_amount,
            monthly_mortgage: this.props.monthly_mortgage,
            rent: this.props.rent
        })
            .then((response) => {
                if (response.status === 200) {
                    alert('Listing Added Successfully')
                    this.props.history.push('/step/dashboard')
                }
            })
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        const recommendedRent = this.props.monthly_mortgage * 1.25
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
                            <span className='step-location'> Step 5</span><br />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={active} alt='active' />
                        </div>
                        <span className='rent-text'> Recommended Rent ${recommendedRent} </span><br /><br /><br /><br />
                        <div className='inputs-step4'>
                            Desired Rent
                            <div className='symbol-container'>
                                <span className='symbol'>$</span>
                                <input className='number-inputs' type='number' placeholder='0' value={this.props.rent} onChange={(e) => addRent(e.target.value)} />
                            </div>
                        </div>
                        <div className='button-container'>
                            <Link to='/step/4' ><button className='previous'>Previous Step</button></Link>
                            <button onClick={this.handleClick} className='complete'>Complete</button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        property_name: state.property_name,
        description: state.description,
        address: state.address,
        city: state.city,
        State: state.State,
        zipcode: state.zipcode,
        image_url: state.image_url,
        loan_amount: state.loan_amount,
        monthly_mortgage: state.monthly_mortgage,
        rent: state.rent
    }
}
const mapDispatchToProps = (dispatch) => ({
    addRent: rent => dispatch({ type: 'ADD_RENT', payload: rent })
})


export default connect(mapStateToProps, mapDispatchToProps)(Step5)