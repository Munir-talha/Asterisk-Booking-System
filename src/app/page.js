import Articles from "@/components/Articles/Articles";
import Explore from "@/components/ExploreSection/Explore";
import FindFlight from "@/components/FindFlight/FindFlight";
import Image from "next/image";


export default function Home() {
  return (
   <h1>
      <FindFlight/>
      <Explore/>
      <Articles/>
   </h1>
  );
}
