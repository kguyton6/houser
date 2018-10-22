import React, { Component } from 'react'
import head_title from './head_title.png'
import './dashboard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import deleteIcon from './delete_icon.png'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listings: [],
            filteredRent: 0
        }
        this.showListing = this.showListing.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.delete = this.delete.bind(this)
        this.handleReset = this.handleReset.bind(this)

    }

    componentDidMount() {
        axios.get('/api/listings')
            .then((res) => {
                this.setState({ listings: res.data })
                console.log(res.data)
            }).catch(err => console.log(err, 'front end error'))
            
    } 

    showListing = () => {
        let listings = this.state.listings
        let listing = []
        if (this.state.listings && this.state.listings.length > 0) {
            for (let i in listings) {
                console.log(listings[i])
                listing.push(
                    <div className="listing-wrapper">
                        <div className="left-box">
                            <img className="listing-image" src={listings[i].image_url} alt='house' width='100%' height='100%' />
                        </div>
                        <div className="middle-box">
                            <ul className='middle'>
                                <li className='property-title'>{listings[i].property_name}</li>
                                <li className='description-name'>{listings[i].description}</li> </ul>
                        </div>
                        <div className="right-box">
                            <img className='delete' src={deleteIcon} onClick={() => this.delete(listings[i].listing_id)} />
                            <ul className='listing-info'>
                                <li>Loan Amount: ${listings[i].loan_amount}</li>
                                <li>Monthly Mortgage: ${listings[i].monthly_mortgage}</li>
                                <li>Rent: ${listings[i].rent}</li>
                                <li>Address: {listings[i].address}</li>
                                <li>City: {listings[i].city}</li>
                                <li>State:{listings[i].state}</li>
                                <li>Zipcode: {listings[i].zipcode}</li>

                            </ul>
                        </div>
                    </div>)
            }
        }
        return listing;
    }
    handleReset() {
        axios.get('/api/listings')
        .then((res) => {
            this.setState({listings: res.data})
        })
    
    }

    handleFilter() {
        axios.post('/api/rent', this.state)
            .then((res) => {
                this.setState({ listings: res.data,
                                filteredRent: 0 })
            })
    }

    delete(listing_id) {
        axios.delete(`/api/delete/${listing_id}`)
            .then((res) => {
                this.setState({ listings: res.data })
            })
    }
    render() {

        return (
            
            <div className='App'>
                <div className='dashboard-header'>
                   <img className='head_title' src={head_title} alt='header' />
                    <Link to='/home' className='logout'>Logout</Link>
                </div>
                <div className='dashboard-container1'><br />
                    <div className='top-main'>
                        <Link to='/step/1'><button className='add-property'>Add New Property</button></Link>
                        <div className='dashboard-container2'>
                            List properties with "desired rent" less than: $
                         <input onChange={(e) => this.setState({ filteredRent: e.target.value })} id='dash-filter' placeholder='0' />

                            <button className='filter' onClick={() => this.handleFilter(this.state.filteredRent)}>Filter</button>
                            <button onClick={this.handleReset} className='reset'>Reset</button>
                        </div></div>
                       { this.state.listings.length > 0 ?
                    <div className='dashboard-main'>
                        Home Listings
                        {this.showListing()}

                    </div> :
                    <div className='empty-container'>
                    No Available Listings
                    </div> }
                </div> 
            </div> 
        )
    }
}


function mapStateToProps(state) {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Dashboard)

