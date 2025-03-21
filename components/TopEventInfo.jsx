import React from "react";
import BtnBookTickets from "./BtnBookTickets";
import WorksTable from "./WorksTable";
import ArtistTable from "./ArtistTable";


// ! Placeholder data, will be dynamic, from db
const eventOverview = "Espressivo is delighted to have engaged the superb Engegard Quartet from Norway to give two concerts in Herefordshire as part of their UK tour on Saturday 30 September and Sunday 1 October 2023."
const eventMainText = "Formed under the midnight sun in Lofoten in 2005, the Engegård Quartet have rapidly become one of Norway’s most sought-after ensembles. Their bold, fresh interpretations of the classical repertoire, combined with a deep attachment to their Scandinavian roots, has attracted international acclaim and inspired some innovative partnerships and programming. The Quartet’s debut CD was praised as ‘breath-taking’ in The Strad, while their second release won Pizzicato magazine’s ‘Supersonic Award’. Recent CD releases include Mozart’s ‘Prussian Quartets’ and the complete string quartets of Schumann. Such is their stature that they have performed with such world-famous musicians as pianists Sir András Schiff and Leif Ove Andsnes."


const TopEventInfo = ({ concertData }) => {
  return (
    <div className="flex flex-wrap justify-center relative">
        <p className="font-bold text-orange m-5 p-5">{eventOverview}</p>
        <div className="border-b-2 border-orange w-96"></div>
        <WorksTable works={concertData.concert_works} />
        <div className="border-b-2 border-orange w-96"></div>

        {/* Need to update props (from works to individual artist info) to right object once db is set up */}
        <ArtistTable works={concertData.concert_works} />
        <div className="border-b-2 border-orange w-96"></div>
        <p className="font-bold m-5 p-5">{eventMainText}</p>
    </div>
  );
};

export default TopEventInfo;