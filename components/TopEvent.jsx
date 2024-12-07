import React from 'react'

const TopEvent = ({artist}) => {
  return (
    <div className="w-full bg-gray-300 h-80 div_TopEvent"> 
    {/* the background image is in globals.css (.div_TopEvent) at the moment, but because the image is got dynamically from the database, i think instead of using globals.css for that, might need some sort of styles object in this page ... or page.js, because these two pages would have access to the concert data */}
    <div>{artist.artist_name}</div>
    </div>
  );
}

export default TopEvent;