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
        <div className="flex justify-start gap-14">
          {/* here need to iterate through the next two future concerts AFTER the nearest one */}

          {arrayOfFutureConcertsData.map((concertDataObject, index) => (
            <>
              <div
                key={index}
                className="w-3/4 shrink-0 md:flex-grow-0 md:basis-5/12 lg:flex-grow lg:basis-2/5"
              >
                <EventCard key={index} concertData={concertDataObject} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureEvents;
