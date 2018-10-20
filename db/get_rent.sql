select * from houser_listings
where user_id = $1 and desired_rent < $2;

