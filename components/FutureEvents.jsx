import React from "react";
import { db, raw } from "../lib/db";
import { getConcertDataForAllFutureConcerts } from "../lib/db";
import EventCard from "./EventCard";

let arrayOfFutureConcertsData = await getConcertDataForAllFutureConcerts();

arrayOfFutureConcertsData.shift(); // this removes the very next Concert

const FutureEvents = () => {
  return (
    <div className="mt-6 hidden md:block">
      <div className="mx-20 border-b-2 border-orange border-opacity-35 md:mx-10"></div>
      <div className="mb-8 px-20 pt-5">
        <h2 className="mb-5 text-3xl font-bold text-orange">Coming soon...</h2>
        <div className="flex justify-between">
          {/* here need to iterate through the next two future concerts AFTER the nearest one */}

          {arrayOfFutureConcertsData.map((concertDataObject, index) => (
            <EventCard key={index} concertData={concertDataObject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureEvents;
