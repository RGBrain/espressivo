import { db, raw } from "../../lib/db";
import { getConcertDataForAllFutureConcerts } from "../../lib/db";

let arrayOfFutureConcertsData = await getConcertDataForAllFutureConcerts();

console.log(arrayOfFutureConcertsData);

export default function Home() {
  return <></>;
}
