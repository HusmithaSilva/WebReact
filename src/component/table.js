import React, {Component} from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";


class Table extends Component{
    render() {

        return(
            <div>
                <table className="table table-striped">
                    <TableHead tablehead={this.props.headee}/>
                    <TableBody tbody={this.props.bode}/>

                </table>

            </div>
        )
    }
}

export default Table;