import React from "react";
import BtnBookTickets from "./BtnBookTickets";

const TopEventCard = ({ concertData }) => {
  const imagePath = "/" + concertData.artist_entity_img_filename;

  return (
    <div className="w-full h-[50vh] bg-cover bg-center flex flex-col lg:flex-row justify-end items-start lg:items-end lg:justify-between relative lg:pb-6 lg:pr-6 xl:pr-28" style={{ backgroundImage: `url(${imagePath})` }}>
      <div>
        {/* div to group artistName and date + venue */}
        <h2 className="text-5xl text-white ml-9 mb-3">{concertData.artist_entity_name}</h2>
        <h3 className="text-xl text-white font-thin ml-9">
          {new Date(concertData.concert_timestamp * 1000).toDateString()} &nbsp;&nbsp;&nbsp; {concertData.venue_name} &nbsp; {concertData.venue_town}
        </h3>
      </div>
      <BtnBookTickets BookTicketsLink={concertData.concert_book_tickets_link} />
    </div>
  );
};

export default TopEventCard;
