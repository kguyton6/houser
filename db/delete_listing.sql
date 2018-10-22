delete from houser_listings
where listing_id=$1
returning *