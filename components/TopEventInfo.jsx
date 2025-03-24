import React from "react";
import WorksTable from "./WorksTable";
import ArtistTable from "./ArtistTable";
import TicketsTable from "./TicketsTable";

const TopEventInfo = ({ concertData }) => {
  return (
    <div className="relative flex flex-col justify-center md:flex-row md:gap-1">
      <div className="md:grow-2 md:basis-2/3">
        <p className="m-5 p-5 font-bold text-orange">
          {concertData.concert_overview}
        </p>
        <div className="mx-20 border-b-2 border-orange border-opacity-35 md:mx-10"></div>
        <WorksTable works={concertData.concert_works} />
        <div className="mx-20 border-b-2 border-orange border-opacity-35 md:mx-10"></div>
      </div>

      <div className="md:grow-1 md:basis-1/3">
        <ArtistTable artist_members={concertData.artist_members} />
        <div className="mx-20 border-b-2 border-orange border-opacity-35 md:mx-7 md:mr-9"></div>
        <p className="m-5 p-5 font-bold md:pl-2 md:text-xs lg:text-sm">
          {concertData.concert_description}
        </p>
        <div className="mx-20 border-b-2 border-orange border-opacity-35 md:mx-7 md:mr-9"></div>
        <TicketsTable concertData={concertData} />
        {/* this TicketsTable needs so much data that i am just sending the entire concertData object to it */}
      </div>
    </div>
  );
};

export default TopEventInfo;
