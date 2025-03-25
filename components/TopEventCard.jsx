import React from "react";
import BtnBookTickets from "./BtnBookTickets";
import { return_time_in_non_24_hour_format_with_am_pm } from "../lib/utils";

const TopEventCard = ({ concertData }) => {
  const imagePath = "/" + concertData.artist_entity_img_filename;

  return (
    <div
      className="relative flex h-[50vh] w-full flex-col items-start justify-end bg-cover bg-center lg:flex-row lg:items-end lg:justify-between lg:pb-6 lg:pr-6 xl:pr-28"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div>
        {/* div to group artistName and date + venue */}
        <h2 className="mb-3 ml-9 text-5xl text-white">
          {concertData.artist_entity_name}
        </h2>
        <h3 className="ml-9 text-xl font-thin text-white">
          {new Date(concertData.concert_timestamp * 1000).toDateString()} &nbsp;
          {return_time_in_non_24_hour_format_with_am_pm(
            new Date(concertData.concert_timestamp * 1000),
          )}{" "}
          &nbsp;&nbsp;&nbsp; {concertData.venue_name} &nbsp;{" "}
          {concertData.venue_town}
        </h3>
      </div>
      <BtnBookTickets BookTicketsLink={concertData.concert_book_tickets_link} />
    </div>
  );
};

export default TopEventCard;
