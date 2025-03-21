import React from "react";
import BtnBookTickets from "./BtnBookTickets";
import WorksTable from "./WorksTable";


// ! Placeholder data, will be dynamic, from db
const eventOverview = "Espressivo is delighted to have engaged the superb Engegard Quartet from Norway to give two concerts in Herefordshire as part of their UK tour on Saturday 30 September and Sunday 1 October 2023."
const TopEventInfo = ({ concertData }) => {
    console.log(concertData.concert_works[0].composer_display_name);
  return (
    <div className="flex flex-wrap justify-center relative">
        <p className="font-bold text-orange m-5 p-5">{eventOverview}</p>
        <div className="border-b-2 border-orange w-96"></div>
        <WorksTable concertData={concertData} />
    </div>
  );
};

export default TopEventInfo;