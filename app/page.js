"use client"
import Landing from "./landing/page";
import {getClubID} from "../app/utils.js"
export default function Home() {

  return (
    <div className="min-h-screen bg-black">
      <button onClick={async (e) => {
        console.log("get club id called")
        const clubId = await getClubID()
        console.log(clubId)
      }}>hey</button>
      <Landing />
    </div>
  );
}
