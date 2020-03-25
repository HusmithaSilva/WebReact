import React, {Component} from "react";

class TableHead extends Component{

    render() {
        return(

            <thead>
            <tr>

                {/*<th scope="col">{this.props.tablehead.second}</th>*/}
                {/*<th scope="col">{this.props.tablehead.third}</th>*/}
                {/*<th scope="col">{this.props.tablehead.fourth}</th>*/}

                {
                    this.props.tablehead.map((value, index) =>{
                        return(
                            <th key={index} scope="col">{value}</th>
                            )

                    })
                }


            </tr>
            </thead>
        )
    }

};

export default TableHead;