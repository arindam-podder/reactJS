// -Class Component life cycle phases are managed by following methods
//         componentDidMount()      - similar to useEffect() hooks()
//         componentWillMount()
//         componentDidUpdate()
//         componentWillUnMount()


import React from "react";

   


export class ClassApiDemo extends React.Component{
    constructor(){
        super()

        this.state = {
            categories : []
        }
    }

    componentDidMount(){
       fetch("http://fakestoreapi.com/products/categories")
       .then(response => response.json())
       .then(data =>{ 
            this.setState({
                categories : data
            })
       })
    }
 
    render(){
       return(
        <div>
            <h2>Categories</h2>
            <ol>
                {
                    this.state.categories.map(c => 
                        <li key={c}> {c} </li> 
                    )
                }
            </ol>
        </div>
       ) 
    }

}