import React from "react";

export class ClassState extends React.Component {
    constructor(){
        super();
        
        this.state = {
            name : "",
            welcome : "Welocome to Class State"
        };

        this.nameChange = this.nameChange.bind(this);
    }


    nameChange(event){
        this.setState({
            name : event.target.value
        })
    }


    render(){
        return(
            <div>
            <h2 className="text-center">{this.state.welcome}</h2>
            <hr />
            <div className="row">
                <div className="col">
                    <dl>
                        <dt>Enter name</dt>
                        <dd><input onChange={this.nameChange} type="text"/></dd>
                    </dl>
                </div>
                <div className="col">
                    <table>
                        <thead>
                            <tr>
                                <th>Entered name</th>
                                <td>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp; {this.state.name}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}