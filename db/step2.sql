update table Houser_listings 
set address=$1, city = $2, state = $3, zipcode = $4
where user_id = $1