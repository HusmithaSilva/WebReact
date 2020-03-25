import React, {Component} from 'react';
import Table from "./component/table";

class App extends Component{
  constructor() {
    super();
    this.state = {
      data: 0
    };
  }

  onClick  = (event, type) => {
    if (type === '-'){
        this.setState({
            data: this.state.data - 1
    });
    }else{
        this.setState({
            data: this.state.data + 1
        });
    }
  };

  render() {
    return(
        <div className={"container"}>
            <div className={"row"}>
              <div className={"col-md-12"}>
                <div className={"text-center mt-5"}>
                    <h1>{this.state.data}</h1>

                    <button className="btn btn-primary mr-3" onClick={(event) => this.onClick(event)}>-</button>

                    <button className="btn btn-primary" onClick={(event) => this.onClick(event)}>+</button>

                    <Table></Table>


                </div>
              </div>
            </div>
        </div>
    )
  }
}
export default App;