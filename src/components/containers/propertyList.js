import React, { Component } from 'react'

export default class PropertyList extends Component {
    renderList(){
        return this.props.properties.map((property) => {
            return (
                <li key={property.listing_id}>{property.listing_id}</li>
            )
        })
    }
    render (){
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}