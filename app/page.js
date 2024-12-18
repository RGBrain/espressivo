import { db, raw } from "../lib/db";
import TopEvent from "@/components/TopEvent";

const artist = await raw("SELECT artist_name FROM artists WHERE artist_id = 1 LIMIT 1;");

export default function Home() {
  return <TopEvent artist={artist} />;
}
