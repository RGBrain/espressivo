import React from 'react'
  
const TopEventCard = ({concertData}) => {

        const imagePath = '/' + concertData.artist_entity_img_filename;

        const myUnixTimestamp = concertData.concert_timestamp;

        const dateOfConcert = new Date(myUnixTimestamp * 1000);

        // const dateOfConcert = new Date(concertData.concert_timestamp * 1000);

        
    return (
        <div
            className="w-full h-[50vh] bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${imagePath})` }}
        >
        <h3 className='text-2xl text-white'>{concertData.artist_entity_name}</h3>
        <h3 className='text-2xl text-white'>{dateOfConcert.toDateString()}</h3>
        <h3 className='text-2xl text-white'>{concertData.venue_name}</h3>
        <h3 className='text-2xl text-white'>{concertData.venue_town}</h3>
        </div>
    );

  }

export default TopEventCard;
