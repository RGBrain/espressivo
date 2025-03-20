import Link from "next/link";
import React from "react";

const BtnBookTickets = ({ BookTicketsLink }) => {
  
  // ! Placeholder for testing
  const boxOfficeURL = BookTicketsLink; // "http://www.braintelemarketing.com/";

  return (
    <div className="h-100 w-100 bg-orange absolute p-2 m-5 bottom-2 left-5 rounded-xl">
      <Link className="text-black font-bold" href={boxOfficeURL} target="_blank">
        Book Tickets
      </Link>
    </div>
  );
};

export default BtnBookTickets;
