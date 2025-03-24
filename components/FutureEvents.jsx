import React from "react";

const FutureEvents = () => {
  return (
    <>
      <div className="mx-20 border-b-2 border-orange border-opacity-35 md:mx-10"></div>
      <div className="px-20 pt-5">
        <h2 className="mb-5 text-3xl font-bold text-orange">Coming soon...</h2>
        <div className="flex justify-between">
          {/* here need to iterate through the next two future concerts AFTER the nearest one */}
        </div>
      </div>
    </>
  );
};

export default FutureEvents;
