import React from "react"

const ArtistTable = ({ works }) => {

  const rows = works.map(item => Object.values(item));
  
  // ! Need to replace the below for artist (each player) info once db is set up
  return (
    <table className="table-auto m-5 p-5">
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="p-1">{rows[index][3]}</td>
            <td className="p-1">{rows[index][0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  };
  
  export default ArtistTable;