import React from "react"

const WorksTable = ({ concertData }) => {
  
    return (
        <table className="table-auto m-5 p-5">
            <tbody>
                <tr className="m-5">
                    <td className="p-1">{concertData.concert_works[0].composer_display_name}</td>
                    <td className="p-1">{concertData.concert_works[0].work_title}</td>
                </tr>
                <tr>
                    <td className="p-1">{concertData.concert_works[1].composer_display_name}</td>
                    <td className="p-1">{concertData.concert_works[1].work_title}</td>
                </tr>
                <tr>
                    <td className="p-1">{concertData.concert_works[2].composer_display_name}</td>
                    <td className="p-1">{concertData.concert_works[2].work_title}</td>
                </tr>
            </tbody>
        </table>
    );
  };
  
  export default WorksTable;