import React from "react";
import BtnBookTickets from "./BtnBookTickets";

const TopEventCard = ({ concertData }) => {
  const imagePath = "/" + concertData.artist_entity_img_filename;

  return (
    <div className="w-full h-[50vh] bg-cover bg-center flex justify-center relative" style={{ backgroundImage: `url(${imagePath})` }}>
      <h2 className="text-5xl text-white absolute p-5 bottom-24 left-5">{concertData.artist_entity_name}</h2>
      <h3 className="text-xl text-white font-thin absolute px-5 bottom-20 left-5">
        {new Date(concertData.concert_timestamp * 1000).toDateString()} &nbsp;&nbsp;&nbsp; {concertData.venue_name} &nbsp; {concertData.venue_town}
      </h3>
      <BtnBookTickets BookTicketsLink={concertData.concert_book_tickets_link} />
    </div>
  );
};

export default TopEventCard;
