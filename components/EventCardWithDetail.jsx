import Image from "next/image";
import Link from "next/link";
import React from "react";
import { return_time_in_non_24_hour_format_with_am_pm } from "../lib/utils";

const EventCardWithDetail = ({ concertData }) => {
  const imagePath = "/" + concertData.artist_entity_img_filename;

  return (
    <div className="flex w-11/12 max-w-3xl flex-row items-stretch border-2 shadow-xl lg:w-3/4">
      {/* on the above outer flex div, consider lg:h-[270px] and xl:h-[320px] if want the event pictures to be huger on screens over 1024px (lg:) or 1280px (xl:) */}
      <div
        className="basis-5/12 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagePath})` }}
      ></div>
      <div className="flex shrink-0 basis-7/12 flex-col p-7 py-5 pl-7">
        <h2 className="mb-1 text-2xl font-semibold text-black">
          {concertData.artist_entity_name}
        </h2>
        <h3 className="text-sm leading-tight text-black">
          {new Date(concertData.concert_timestamp * 1000).toDateString()}{" "}
          -&nbsp;
          {return_time_in_non_24_hour_format_with_am_pm(
            new Date(concertData.concert_timestamp * 1000),
          )}{" "}
          -
          <br />
          {concertData.venue_name},&nbsp; {concertData.venue_town} -{" "}
          {concertData.concert_fee}
        </h3>
        <p className="mt-4 text-sm font-semibold leading-tight text-orange lg:text-base lg:leading-[1.2]">
          {concertData.concert_overview}
        </p>
        <div className="h-100 w-100 mt-3 self-end p-2">
          <Link
            className="text-xl font-bold text-black"
            href="http://braintelemarketing.com"
            target="_blank"
          >
            {"-> More Info"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCardWithDetail;
