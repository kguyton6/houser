import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './steps.css'
import active from '../step_active.png'
import inactive from '../step_inactive.png'
import complete from '../step_completed.png'
import head_title from '../head_title.png'
import {connect} from 'react-redux'


class Step3 extends Component {
  
    render() {
        const {addImage} = this.props
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
                        <div className='step3'>
                            <span className='step-location'> Step 3</span>
                            <img className='step-logo3' src={complete} alt='active' />
                            <img className='step-logo3' src={complete} alt='active' />
                            <img className='step-logo3' src={active} alt='active' />
                            <img className='step-logo3' src={inactive} alt='inactve' />
                            <img className='step-logo3' src={inactive} alt='inactve' />
                        </div>
                    <div className='wizard-main'>
                <div className='inputs-step4'>
                <div className='img-container'>
                <img src={this.props.image_url} value={this.props.image_url} alt='' width='100%' height='100%'/> 
              </div>

                    <br/>
                    Image URL
            <input className='inputs' value={this.props.image_url} onChange={(e) => addImage(e.target.value)} /></div>
            <div className='button-container'>
                        <Link to='/step/2' ><button className='previous'>Previous Step</button></Link>
            <Link to='/step/4' ><button className='next'>Next Step</button></Link>
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
        image_url: state.image_url
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addImage: image => dispatch ({type: 'ADD_IMAGE', payload: image })
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Step3)