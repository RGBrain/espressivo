import Link from "next/link";
import React from "react";

const TicketsTable = ({ concertData }) => {
  const td_concert_fee = concertData.concert_fee;
  const td_venue_details = `${concertData.venue_name}, ${concertData.venue_town}, ${concertData.venue_postcode}`;
  const boxOfficeInfo = concertData.box_office_info;

  const numberOfBoxOffices = boxOfficeInfo.length;

  return (
    <table className="m-5 table-fixed p-5 md:text-xs lg:text-sm">
      <tbody>
        <tr>
          <td className="p-1 pl-5 align-top md:px-2">Tickets:</td>
          <td>{td_concert_fee}</td>
        </tr>
        <tr>
          <td className="p-1 pl-5 align-top md:px-2">Venue:</td>
          <td>{td_venue_details}</td>
        </tr>
        <tr>
          <td className="w-28 p-1 pl-5 align-top md:px-2">Box Office:</td>
          <td>
            <ul>
              {boxOfficeInfo.map((row, index) => (
                <li key={index}>
                  {boxOfficeInfo[index]["box_office_name"]}&nbsp;-&nbsp;
                  {boxOfficeInfo[index]["box_office_phone_number"]}
                  {boxOfficeInfo[index]["box_office_website_link"] ? (
                    <>
                      {" "}
                      &amp;{" "}
                      <Link
                        href={boxOfficeInfo[index]["box_office_website_link"]}
                        target="_blank"
                      >
                        {boxOfficeInfo[index]["box_office_website_link"]
                          .replace(/https:\/\//g, "")
                          .replace(/http:\/\//g, "")}
                      </Link>{" "}
                    </>
                  ) : (
                    ""
                  )}
                  {!index && numberOfBoxOffices > 1 ? "," : ""}{" "}
                  {/* this code is to make a comma appear after the first Box office details IF there is a second Box office also */}
                </li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TicketsTable;
