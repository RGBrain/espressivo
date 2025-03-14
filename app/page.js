import { db, raw } from "../lib/db";
import TopEventCard from "@/components/TopEventCard";
import { getConcertDataForNextConcert } from "../lib/db";

const nextConcertData = await getConcertDataForNextConcert();

console.log(nextConcertData);

// const artist = await raw("SELECT artist_name FROM artists WHERE artist_id = 1 LIMIT 1;");

export default function Home() {
  return <TopEventCard concertData={nextConcertData} />;
}   
