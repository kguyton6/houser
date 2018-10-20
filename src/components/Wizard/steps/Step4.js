import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './steps.css'
import active from '../step_active.png'
import inactive from '../step_inactive.png'
import complete from '../step_completed.png'
import head_title from '../head_title.png'
import {connect} from 'react-redux'




class Step4 extends Component {
  constructor(props){
      super(props)

    //   this.addLoan = this.addLoan.bind(this)
    //   this.addMortgage = this.addMortgage.bind(this)
  }
 
    render() {
        const {addLoan, addMortgage, loan, mortgage } = this.props
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
                        <span className='wizard-span'> Step 4</span>
                        {/* { this.req.match.params.id } */}
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={complete} alt='active' />
                        <img className='step-logo' src={active} alt='active' />
                        <img className='step-logo' src={inactive} alt='inactive' />
                    </div>
                    <div className='wizard-main'>
                        <div className='inputs-step4'>
                            Monthly Mortgage 
                              <input className='inputs' value={mortgage} onChange={(e) => addMortgage(e.target.value)} />
                              <br/>
                            Loan Amount
                              <input className='inputs' value={loan} onChange={(e) => addLoan(e.target.value)} />

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
function mapStateToProps (state){
    console.log(state)
    return {
        mortgage: state.mortgage,
        loan: state.loan
    }
}
const mapDispatchToProps = (dispatch) => ({
    addMortgage: mortgage => dispatch ({type: 'ADD_MORTGAGE', payload: mortgage}),
    addLoan: loan => dispatch ({type: 'ADD_LOAN', payload: loan})
})


export default connect(mapStateToProps, mapDispatchToProps)(Step4)