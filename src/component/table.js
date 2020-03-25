import React, {Component} from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";


class Table extends Component{
    render() {

        const tableheadvalue = {
            first: "No",
            second: "First name",
            third: "Last name",
            fourth: "country"
        };

        return(
            <div>
                <table className="table table-striped">
                    <TableHead tableheade={tableheadvalue}/>
                    <TableBody/>

                </table>

            </div>
        )
    }
}

export default Table;