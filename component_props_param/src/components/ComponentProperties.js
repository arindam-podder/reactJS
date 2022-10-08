import { Login } from "./LoginComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { GridTable } from "./GridComponent";

export function ComponentProperty(){
    return(
        <div>
            <h1 className="text-center">Welcome to inquery application</h1>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Login  title={"Customer Login here"} />
                </div>
                <div className="col d-flex justify-content-center">
                <Login  title={"Manager Login here"} />
                </div>
            </div>
            <hr />
            <div>
                <h3>Product List</h3>
                <GridTable fields={["name", "price"]} 
                    data={[{name:"Sumsung TV", price:"30000.50"},{name:"Nike Casuals", price:"7999"}]}  />
            </div>
            <div>
                <h3>Employee List</h3>
                <GridTable fields={["name", "company"]} 
                    data={[{name:"Arindam Podder", company:"Sevya"},{name:"Sajid Allu", company:"ADI"}]}  />
            </div>
        </div>
    )
}