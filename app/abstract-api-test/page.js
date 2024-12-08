import { db, raw, getNextConcertData } from "../../lib/db";
import TopEvent from "@/components/TopEvent";

export default async function Home() {
  const concertData = await getNextConcertData();

  console.log('it is:');
  console.log(concertData);

  return <TopEvent artist="test" />;
}
