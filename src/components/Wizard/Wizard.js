import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import head_title from './head_title.png'
import './wizard.css'
import active from './step_active.png'
import inactive from './step_inactive.png'
import { connect } from 'react-redux'



class Wizard extends Component {
    constructor(props){
        super(props)


        // this.addDescription = this.addDescription.bind(this)
        // this.addName = this.addName.bind(this)
        }


   
    render() {
        const { addName, addDescription } = this.props 
        return (
            <div className='App'>
                <div className='dashboard-header'>
                    <img className='head_title'   src={head_title} alt='header' />
                    <Link to='/home' className='logout'>Logout</Link>
                </div>
                <div className='wizard-container'>
                        <span className='top-container'>
                            Add new listing
           <Link to='/dashboard' ><button className='cancel'>Cancel</button></Link>
                        </span>
                    <div className='wizard-main'>
                        <div className='steps'>
                            <span className='wizard-span'> Step 1</span>

                            <img className='step-logo' src={active} alt='active' />
                            <img className='step-logo' src={inactive} alt='inactve' />
                            <img className='step-logo' src={inactive} alt='inactve' />
                            <img className='step-logo' src={inactive} alt='inactve' />
                            <img className='step-logo' src={inactive} alt='inactve' />
                        </div>


                           Property Name
            <input className='property-name' value={this.props.name}onChange={(e) => addName(e.target.value)} />
                          Property description
            <textarea className='description' value={this.props.description}onChange={(e) => addDescription(e.target.value)} ></textarea>
          <Link to='/step/2' ><button className='next'>Next Step</button></Link> 
                        </div>
                    </div>
                </div>

        )
    }
}

function mapStateToProps(state){
    return {
        name: state.name,
        description: state.description
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addName: name => dispatch ({type: 'ADD_NAME', payload: name}),
        addDescription: description => dispatch ({type: 'ADD_DESCRIPTION', payload: description })
    }
}

    
    export default connect (mapStateToProps, mapDispatchToProps)(Wizard)