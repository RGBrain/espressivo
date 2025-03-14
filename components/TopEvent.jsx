import React from 'react'

const TopEvent = ({concertData}) => {
  return (
    <div className="w-full bg-white h-80 div_TopEvent"> 
    {/* the background image is in globals.css (.div_TopEvent) at the moment, but because the image is got dynamically from the database, i think instead of using globals.css for that, might need some sort of styles object in this page ... or page.js, because these two pages would have access to the concert data */}
    <div>{concertData.artist_entity_name}</div>
    <div>{concertData.concert_fee}</div>
    </div>
  );
}

export default TopEvent;