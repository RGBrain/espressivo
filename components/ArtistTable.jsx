import React from "react";

const ArtistTable = ({ artist_members }) => {
  const rows = artist_members.map((item) => Object.values(item));

  // ! Need to replace the below for artist (each player) info once db is set up
  // ? artist_members is now dynamic and setup

  return (
    <table className="table-auto m-5 p-5">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="p-1">{rows[index][0]}</td>
            <td className="p-1">{rows[index][1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArtistTable;
