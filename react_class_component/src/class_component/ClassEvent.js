import React from "react";

export class ClassEvent extends React.Component{
    constructor(){
        super()

        this.state = {
            actionMsg : ""
        }
        this.addClick = this.addClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    addClick(){
        this.setState({
            actionMsg : "Add button clicked."
        })
    }
    deleteClick(){
        this.setState({
            actionMsg : "Delete button clicked."
        })
    }



    render(){
        return(
            <div>
                <div>
                    <button onClick={this.addClick} > Add </button>
                    <button onClick={this.deleteClick} > Delete </button>
                </div>
                <h3>
                    {this.state.actionMsg}
                </h3>
            </div>
        )
    }
}