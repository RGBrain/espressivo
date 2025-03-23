import Link from "next/link";
import React from "react";

const BtnBookTickets = ({ BookTicketsLink }) => {
  // ! Placeholder for testing
  const boxOfficeURL = BookTicketsLink; // "http://www.braintelemarketing.com/";

  return (
    <div className="h-100 w-100 m-5 ml-9 mt-3 rounded-xl bg-orange p-2">
      <Link
        className="font-bold text-black"
        href={boxOfficeURL}
        target="_blank"
      >
        Book Tickets
      </Link>
    </div>
  );
};

export default BtnBookTickets;
