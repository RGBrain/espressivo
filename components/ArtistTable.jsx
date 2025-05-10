import React from "react";

const ArtistTable = ({ artist_members }) => {
  const rows = artist_members.map((item) => Object.values(item));

  return (
    <table className="m-5 table-fixed p-5 md:text-xs lg:text-sm">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="p-1 px-5 align-top md:px-2">{rows[index][0]}</td>
            <td className="p-1 px-5 align-top md:px-4">{rows[index][1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArtistTable;
