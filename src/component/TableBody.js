import React from "react";

const TableBody = (props) => {
    return(
        <tbody>

            {
                props.tbody.map((value, index) => {
                  return(
                  <tr key={index}>
                      <th scope="row">{value.first}</th>
                      <td>{value.second}</td>
                    <td>{value.third}</td>
                    <td>{value.fourth}</td>
                </tr>
                  )
                })
            }



        </tbody>
    )
};
export default TableBody;