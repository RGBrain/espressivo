import React from "react";
import WorksTable from "./WorksTable";
import ArtistTable from "./ArtistTable";

const TopEventInfo = ({ concertData }) => {
  return (
    <div className="flex flex-wrap justify-center relative">
      <p className="font-bold text-orange m-5 p-5">{concertData.concert_overview}</p>
      <div className="border-b-2 border-orange border-opacity-50 w-96"></div>
      <WorksTable works={concertData.concert_works} />
      <div className="border-b-2 border-orange border-opacity-50 w-96"></div>
      <ArtistTable artist_members={concertData.artist_members} />
      <div className="border-b-2 border-orange border-opacity-50 w-96"></div>
      <p className="font-bold m-5 p-5">{concertData.concert_description}</p>
    </div>
  );
};

export default TopEventInfo;
