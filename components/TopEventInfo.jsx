import React from "react";
import WorksTable from "./WorksTable";
import ArtistTable from "./ArtistTable";

const TopEventInfo = ({ concertData }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center relative md:gap-1">
      <div className="md:grow-2 md:basis-2/3">
        <p className="font-bold text-orange m-5 p-5">{concertData.concert_overview}</p>
        <div className="border-b-2 border-orange border-opacity-50 mx-20 md:mx-10"></div>
        <WorksTable works={concertData.concert_works} />
        <div className="border-b-2 border-orange border-opacity-50 mx-20 md:mx-10"></div>
      </div>

      <div className="md:grow-1 md:basis-1/3">
        <ArtistTable artist_members={concertData.artist_members} />
        <div className="border-b-2 border-orange border-opacity-50 mx-20 md:mx-7 md:mr-9"></div>
        <p className="font-bold m-5 p-5 md:text-xs lg:text-sm md:pl-2">{concertData.concert_description}</p>
      </div>
    </div>
  );
};

export default TopEventInfo;
