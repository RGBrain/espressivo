import React from "react"

const WorksTable = ({ works }) => {

  const rows = works.map(item => Object.values(item));
  
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
  
  export default WorksTable;