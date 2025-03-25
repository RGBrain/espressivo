import EventCard from "@/components/EventCard";
import { getConcertDataForAllFutureConcerts } from "../../lib/db";
import EventCardWithDetail from "@/components/EventCardWithDetail";

let arrayOfFutureConcertsData = await getConcertDataForAllFutureConcerts();

console.log(arrayOfFutureConcertsData);

export default function Home() {
  return (
    <>
      <h2 className="pt-5 text-center text-2xl md:pl-12 md:text-left md:text-3xl">
        Forthcoming Concerts
      </h2>
      {/* THIS DIV ONLY SHOWS FOR SCREENS < 768 px (md:) */}
      <div className="flex flex-col items-center gap-5 pt-8 md:hidden">
        {arrayOfFutureConcertsData.map((concertDataObject, index) => (
          <EventCard key={index} concertData={concertDataObject} />
        ))}
      </div>

      {/* THIS DIV ONLY SHOWS FOR SCREENS > 768 px (md:) */}
      <div className="hidden flex-col items-center gap-5 pt-8 md:flex">
        {arrayOfFutureConcertsData.map((concertDataObject, index) => (
          <EventCardWithDetail key={index} concertData={concertDataObject} />
        ))}
      </div>
    </>
  );
}
