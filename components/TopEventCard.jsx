import React from "react";
import BtnBookTickets from "./BtnBookTickets";

const TopEventCard = ({ concertData }) => {
  const imagePath = "/" + concertData.artist_entity_img_filename;

  const myUnixTimestamp = concertData.concert_timestamp;

  const dateOfConcert = new Date(myUnixTimestamp * 1000);

  // const dateOfConcert = new Date(concertData.concert_timestamp * 1000);

  return (
    <div className="w-full h-[50vh] bg-cover bg-center flex justify-center items-center relative" style={{ backgroundImage: `url(${imagePath})` }}>
      <h2 className="text-5xl text-white absolute p-5 bottom-40 left-5">{concertData.artist_entity_name}</h2>
      <h3 className="text-2xl text-white absolute p-5 bottom-20 left-5">
        {dateOfConcert.toDateString()} &nbsp;&nbsp;&nbsp; {concertData.venue_name} &nbsp;&nbsp;&nbsp; {concertData.venue_town}
      </h3>
      <BtnBookTickets />
    </div>
  );
};

export default TopEventCard;
