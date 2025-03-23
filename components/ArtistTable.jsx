import React from "react";

const ArtistTable = ({ artist_members }) => {
  const rows = artist_members.map((item) => Object.values(item));

  return (
    <table className="table-fixed m-5 p-5">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="p-1 px-5 align-top">{rows[index][0]}</td>
            <td className="p-1 px-5 align-top">{rows[index][1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArtistTable;
