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
      <div className="pt-8 md:hidden">
        {arrayOfFutureConcertsData.map((concertDataObject, index) => (
          <>
            <div key={index} className="mx-auto w-3/4">
              <div className="mx-auto flex w-3/4 flex-col items-center">
                <EventCard key={index} concertData={concertDataObject} />
                <div className="my-10 w-80 max-w-sm border-b-2 border-orange border-opacity-35"></div>
              </div>
            </div>
          </>
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
