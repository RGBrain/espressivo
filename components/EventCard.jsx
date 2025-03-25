import React from "react";
import { return_time_in_non_24_hour_format_with_am_pm } from "../lib/utils";

const EventCard = ({ concertData }) => {
  const imagePath = "/" + concertData.artist_entity_img_filename;

  return (
    <div
      className="flex h-[220px] w-3/4 max-w-sm shrink-0 flex-col items-start justify-end bg-cover bg-center md:basis-1/2 lg:h-[270px] lg:max-w-md lg:basis-2/5"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="w-2xl w-full bg-black bg-opacity-70 pb-2">
        {/* div to group artistName and date + venue */}
        <h2 className="mb-1 ml-5 text-2xl font-semibold text-white">
          {concertData.artist_entity_name}
        </h2>
        <h3 className="ml-5 text-sm leading-tight text-white">
          {new Date(concertData.concert_timestamp * 1000).toDateString()}{" "}
          -&nbsp;
          {return_time_in_non_24_hour_format_with_am_pm(
            new Date(concertData.concert_timestamp * 1000),
          )}{" "}
          <br />
          {concertData.venue_name} &nbsp; {concertData.venue_town}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
