select * from houser_listings
where user_id=$1
/*
insert into houser_listings (property_name,
description,
address,
city,
state,
zipcode,
image_url,
loan_amount,	
monthly_mortgage,	
rent)
values ( 'Single Family Home, 5 bed 3.5 bath','Waiting is hard to do! Sounds like a song, right? Well, the wait for this home to come available is incredibly worth it. Take a look at this immaculately clean, updated home with a 2 yr old roof, new water heater and newer appliances. It is all beautiful! It has a large easy yard, lots of parking, and is on a cul de sac. 5 bedrooms give space for everyone and possibly your own office. You will love that there are 3 AND a half baths - no more waiting your turn. Plus, the area is pretty great.',
'4136 West 4650 South', 'Roy', 'Utah', '84067', 'https://photos.zillowstatic.com/p_f/ISmut5zhz535tj0000000000.jpg', 197000.00, 1345.00, 1600.00 )

-- create table houser_users(
-- user_id serial primary key,
-- username text, 
-- password text)

-- insert into houser_users (username, password )
-- values ('kguyton', 'Haley2006')
*/
