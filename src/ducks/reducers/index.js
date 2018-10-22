const initialState = {
    property_name: '',
   description: '',
   address: '',
   city:'',
   State: '',
   zipcode: null, 
   image_url: '',
   loan_amount: '',
   monthly_mortgage: '',
   rent: null,

}


export const ADD_NAME = 'ADD_NAME'
export const ADD_DESCRIPTION = 'ADD_DESCRIPTION'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const ADD_CITY = 'ADD_CITY'
export const ADD_STATE = 'ADD_STATE'
export const ADD_ZIP = 'ADD_ZIP'
export const ADD_IMAGE = 'ADD_IMAGE'
export const ADD_MORTGAGE = 'ADD_MORTGAGE'
export const ADD_LOAN = 'ADD_LOAN'
export const ADD_RENT = 'ADD_RENT'




const rootReducer = (state = initialState, action) => {
    console.log('REDUCER HIT: Action ->', action );
    switch (action.type) {
        case ADD_NAME:
        return Object.assign({}, state, {property_name: action.payload })
       
        case ADD_DESCRIPTION:
        return Object.assign({}, state, {description: action.payload})

        case ADD_ADDRESS:
        return Object.assign({}, state, {address: action.payload})

        case ADD_CITY:
        return Object.assign({}, state, {city: action.payload})

        case ADD_STATE:
        return Object.assign({}, state, {State: action.payload})

        case ADD_ZIP:
        return Object.assign({}, state, {zipcode: action.payload})

        case ADD_IMAGE:
        return Object.assign({}, state, {image_url: action.payload})

        case ADD_MORTGAGE:
        return Object.assign({}, state, {monthly_mortgage: action.payload})

        case ADD_LOAN:
        return Object.assign({}, state, {loan_amount: action.payload})

        case ADD_RENT:
        return Object.assign({}, state, {rent: action.payload})

       default: return state
    }
}

export const addName = property_name => ({ type: ADD_NAME, payload: property_name })
export const addDescription = description => ({type: ADD_DESCRIPTION, payload: description})

export const addAddress = address => ({type: ADD_ADDRESS, payload: address})

export const addCity = city => ({type: ADD_CITY, payload: city})

export const addState = State => ({type: ADD_STATE, payload: State})

export const addZip = zipcode => ({
    type: ADD_ZIP, payload: zipcode
})

export const addImage = image_url => ({type: ADD_IMAGE, payload: image_url})

export const addMortgage = monthly_mortgage => ({type: ADD_MORTGAGE, payload: monthly_mortgage})

export const addLoan = loan_amount => ({type: ADD_LOAN, payload: loan_amount})

export const addRent = rent => ({type: ADD_RENT, payload: rent})

// export const recommendRent = recommendRent => ({type: RECOMMENDED_RENT, payload: recommendRent  })
export default rootReducer;
