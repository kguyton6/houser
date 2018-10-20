import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './steps.css'
import active from '../step_active.png'
import inactive from '../step_inactive.png'
import complete from '../step_completed.png'
import head_title from '../head_title.png'
import {connect} from 'react-redux'


class Step3 extends Component {
   constructor(props){
       super(props)

      

   }

    render() {
        const {addImage, image } = this.props
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
                            <span className='wizard-span'> Step 3</span>
                            {/* { this.req.match.params.id } */}
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={complete} alt='active' />
                            <img className='step-logo' src={active} alt='active' />
                            <img className='step-logo' src={inactive} alt='inactve' />
                            <img className='step-logo' src={inactive} alt='inactve' />
                        </div>
                    <div className='wizard-main'>
                <div className='inputs-step4'>
               { this.props.image !== null ?
                <div className='img-container'>
                <img src={image} alt='Preview' width='auto' height='325px'/></div> :
                <div className='img-container'>
                <span className='preview' >Preview</span></div> }
                    <br/>
                    Image URL
            <input className='inputs' value={this.props.image} onChange={(e) => addImage(e.target.value)} /></div>
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
        image: state.image
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addImage: image => dispatch ({type: 'ADD_IMAGE', payload: image })
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Step3)