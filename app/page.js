import { db, raw } from "../lib/db";
import TopEventCard from "@/components/TopEventCard";
import TopEventInfo from "@/components/TopEventInfo";
import { getConcertDataForNextConcert } from "../lib/db";
import FutureEvents from "@/components/FutureEvents";

const nextConcertData = await getConcertDataForNextConcert();

console.log(nextConcertData);

// const artist = await raw("SELECT artist_name FROM artists WHERE artist_id = 1 LIMIT 1;");

export default function Home() {
  return (
    <>
      <TopEventCard concertData={nextConcertData} />
      <TopEventInfo concertData={nextConcertData} />
      <FutureEvents className="hidden lg:block" />
    </>
  );
}
