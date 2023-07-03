import React from "react";


//creating class component 
class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            employees: [
                { id: 10, name: 'Swarna Sachdeva', email: 'swarna@email.com' },
                { id: 20, name: 'Sarvesh Date', email: 'sarvesh@email.com' },
                { id: 30, name: 'Diksha Meka', email: 'diksha@email.com' }
            ]   
        }
    }

    //method 
    renderTableHeader(){
        const headData = Object.keys(this.state.employees[0])
        return (
            <thead>
                <tr>
                {headData.map( (colName, index) => {
                       return( <th key={index}> {colName.toUpperCase()} </th> )           //inside map , return 
                    }
                )}
                </tr>
            </thead>
        )
    }

    renderTableData(){
        return(
            <tbody>
                {this.state.employees.map( (employee, index) => {
                        const {id, name, email } = employee
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                            </tr>
                        )
                    }
                )}
            </tbody>
        )
    }

    render() {
        return(
            <div>
                <h1> {this.props.children}   </h1>     
                <table border={2} >
                    {this.renderTableHeader()}
                    {this.renderTableData()}
                </table>
            </div>
        )
    }

}//class Table end


export default Table;
