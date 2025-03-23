import Link from "next/link";
import React from "react";

const BtnBookTickets = ({ BookTicketsLink }) => {
  // ! Placeholder for testing
  const boxOfficeURL = BookTicketsLink; // "http://www.braintelemarketing.com/";

  return (
    <div className="h-100 w-100 bg-orange p-2 m-5 rounded-xl ml-9 mt-3">
      <Link className="text-black font-bold" href={boxOfficeURL} target="_blank">
        Book Tickets
      </Link>
    </div>
  );
};

export default BtnBookTickets;
