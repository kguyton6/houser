
module.exports = {
    get_all: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all()
            .then((users) => res.status(200).send(users))
    },

    get_user: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { username, password } = req.body

        dbInstance.get_user(username, password)
            .then((data) => {
                if (data[0]) {
                    req.session.user = data[0]
                    console.log(req.session)
                    res.status(200).send(data)
                } else {
                    res.sendStatus(401)
                }
            })
    },


    create_user: (req, res, next) => {
        console.log('we are in create')
        const dbInstance = req.app.get('db')
        const { username, password, firstName, lastName, } = req.body
        dbInstance.check_user(username)
            .then((data) => {
                console.log(data)
                if (!data[0]) {
                    req.session.user = data[0]
                    dbInstance.create_user(username, password, firstName, lastName)
                        .then(() => res.sendStatus(200))

                } else { res.status(401).send('duplicate username') }

            })
    },

    all_listings: (req, res, next) => {
        if (!req.session) {
            res.sendStatus(401)
        } else {
        const dbInstance = req.app.get('db')
        dbInstance.all_listings(req.session.user.user_id)

            .then((listings) => {
                res.status(200).send(listings)
            })
            .catch(err => console.log(err, 'controller error'))
        }
    },

    newListing: (req, res, next) => {
        const dbInstance = req.app.get('db')
        let { property_name, description, address, city, State, zipcode, image_url, loan_amount, monthly_mortgage, rent } = req.body


        dbInstance.newListing(req.session.user.user_id, property_name, description, address, city, State, zipcode, image_url, loan_amount, monthly_mortgage, rent)
            .then(() => { res.sendStatus(200) })
            .catch(err => console.log(err, 'controller error'))
    },
    get_listing: (req, res, next) => {
        console.log('get listing', req.body)
        const dbInstance = req.app.get('db')
        const { filteredRent } = req.body


        dbInstance.get_listing(req.session.user.user_id, filteredRent)
            .then((listings) => res.status(200).send(listings))
            .catch(err => console.log(err, 'get listing error'))
    },

    delete_listing: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log('delete', req.params.id)


        dbInstance.delete_listing(req.params.id)
        .then(() => {
            if(req.session){
                dbInstance.all_listings(req.session.user.user_id)
                .then(listings => res.status(200).send(listings))
            }
        })
    }     
        
}
