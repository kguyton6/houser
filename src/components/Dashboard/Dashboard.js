import React, { Component } from 'react'
import head_title from './head_title.png'
import './dashboard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listings: [],
            filter: 0
        }
        this.showListing = this.showListing.bind(this)
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
                // if (listings[i].rent > 0 ){
                //     this.handleFilter()
                // }
                console.log(listings[i])
                listing.push(
                    <div className="listing-wrapper">
                        <div className="left-box">
                            <img className="listing-image" src={listings[i].image_url} width='100%' height='100%'/>
                        </div>
                        <div className="middle-box">
                        Name  {listings[i].property_name }
                        {listings[i].description}</div>
                        <div className="right-box">
                            <ul className='listing-info'>
                                <li>Loan: {listings[i].loan_amount}</li>
                                <li>Monthly Mortgage: {listings[i].monthly_mortgage}</li>
                                <li>Rent: {listings[i].rent}</li>
                                <li>address: {listings[i].address}</li>
                                <li>city: {listings[i].city}</li>
                                <li>zipcode: {listings[i].zipcode}</li>

                            </ul>
                        </div>
                    </div>)
            }
        }
        return listing;
    }

    handleFilter(){
        axios.get('/api/listings', this.state.filter)
    }

    render() {

        return (
            <div className='App'>
                <div className='dashboard-header'>
                   <Link to='/home' ><img className='head_title' src={head_title} alt='header' /></Link>
                    <Link to='/home' className='logout'>Logout</Link>
                </div>
                <div className='dashboard-container1'><br/>
                    <Link to='/step/1'><button className='add-property'>Add New Property</button></Link>
                    <div className='dashboard-container2'>
                        List properties with "desired rent" less than: $
                         <input onChange={ (e) => this.setState({ filter: e.target.value}) } ID='dash-filter' placeholder='0' />
                       
                        <button className='filter' onClick={() => this.handleFilter()}>Filter</button>
                        <button className='reset'>Reset</button>
                    </div>
                    <div className='dashboard-main'>
                        Home Listings
                        {this.showListing()}

                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
 return {
     listings: state.listings
 }
}

export default connect (mapStateToProps)(Dashboard)

