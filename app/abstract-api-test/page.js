import { getConcertDataForNextConcert, getConcertDataForAllFutureConcerts, getConcertDataForAllPastConcerts } from "../../lib/db";
import TopEvent from "@/components/TopEvent";

export default async function Home() {
  //  const concertData = await getConcertDataForNextConcert();
  const concertData = await getConcertDataForAllFutureConcerts();

  console.log("it is:");
  console.log(concertData);

  return <TopEvent artist="test" />;
}
