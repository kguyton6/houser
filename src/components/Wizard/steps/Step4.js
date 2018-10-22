import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './steps.css'
import active from '../step_active.png'
import inactive from '../step_inactive.png'
import complete from '../step_completed.png'
import head_title from '../head_title.png'
import { connect } from 'react-redux'




class Step4 extends Component {

    render() {
        const { addLoan, addMortgage, loan_amount, monthly_mortgage } = this.props
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
                        <span className='step-location'> Step 4</span>
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={active} alt='active' />
                        <img className='step-logo' src={inactive} alt='inactive' />
                    </div>
                    <div className='wizard-main'>
                        <div className='inputs-step4'>
                            Monthly Mortgage
                            <div className='symbol-container'>
                            <span className='symbol'>$</span>
                              <input className='number-inputs' type='number' placeholder='0.00' value={monthly_mortgage} onChange={(e) => addMortgage(e.target.value)} />
                              </div>
                            <br />
                            Loan Amount
                            <div className='symbol-container'>
                            <span className='symbol'>$</span>
                              <input className='number-inputs' type='number' placeholder='0.00' value={loan_amount} onChange={(e) => addLoan(e.target.value)}/>
                              </div>

                        </div>
                        <div className='button-container'>
                            <Link to='/step/3' ><button className='previous'>Previous Step</button></Link>
                            <Link to='/step/5' ><button className='next'>Next Step</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        monthly_mortgage: state.monthly_mortgage,
        loan_amount: state.loan_amount
    }
}
const mapDispatchToProps = (dispatch) => ({
    addMortgage: monthly_mortgage => dispatch({ type: 'ADD_MORTGAGE', payload: monthly_mortgage }),
    addLoan: loan_amount => dispatch({ type: 'ADD_LOAN', payload: loan_amount })
})


export default connect(mapStateToProps, mapDispatchToProps)(Step4)