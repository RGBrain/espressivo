import React from "react";
import WorksTable from "./WorksTable";
import ArtistTable from "./ArtistTable";

const TopEventInfo = ({ concertData }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center relative sm:gap-9">
      <div className="grow-2 basis-2/3">
        <p className="font-bold text-orange m-5 p-5">{concertData.concert_overview}</p>
        <div className="border-b-2 border-orange border-opacity-50 w-full"></div>
        <WorksTable works={concertData.concert_works} />
        <div className="border-b-2 border-orange border-opacity-50 w-full"></div>
      </div>

      <div className="grow-1 basis-1/3">
        <ArtistTable artist_members={concertData.artist_members} />
        <div className="border-b-2 border-orange border-opacity-50 w-full"></div>
        <p className="font-bold m-5 p-5">{concertData.concert_description}</p>
      </div>
    </div>
  );
};

export default TopEventInfo;
