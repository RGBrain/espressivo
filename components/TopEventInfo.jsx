import React from "react";
import BtnBookTickets from "./BtnBookTickets";


// ! Placeholder data, will be dynamic, from db

const eventOverview = "Espressivo is delighted to have engaged the superb Engegard Quartet from Norway to give two concerts in Herefordshire as part of their UK tour on Saturday 30 September and Sunday 1 October 2023."

const TopEventInfo = ({ concertData }) => {
  return (
    <div className="flex justify-center relative">
        <p>{eventOverview}</p>
    </div>
  );
};

export default TopEventInfo;