

/* export function DataBinding(){
    //primitive data
    var Name = "Iphone 11"
    var Price = 55033.50
    var Stock = false
    var Photo = "images/iphone11.jpg";
    return(
        <div className="container-fluid">
            <h3>Product Details</h3>
             <dl>
                <dt>Name</dt>
                <dd> {Name} </dd>
                <dt>Price</dt>
                <dd>{Price}</dd>
                <dt>Stock</dt>
                <dd>{ (Stock==true)? "Available":"Out of stock" }</dd>
                <dt>Photo</dt>
                <dd> <img alt="pic will appear" src={Photo}  width="200" height="150" /> </dd>
             </dl>
        </div>
    )
}   */

/*export function DataBinding(){
     //object data
     const Product={
        Name:"Iphone 11",
        Price:55033.50,
        Stock:false,
        Photo:"images/iphone11.jpg"
     }
     return(
         <div className="container">
             <h3>Product Details</h3>
              <dl>
                 <dt>Name</dt>
                 <dd> {Product.Name} </dd>
                 <dt>Price</dt>
                 <dd>{Product.Price}</dd>
                 <dt>Stock</dt>
                 <dd>{ (Product.Stock===true)? "Available":"Out of stock" }</dd>
                 <dt>Photo</dt>
                 <dd> <img alt="pic will appear" src={Product.Photo}  width="200" height="150" /> </dd>
              </dl>
         </div>
     )    
}   */



/*export function DataBinding(){
    //array of simple primitive data
    const Categories = ["Electronics", "Men Clothes", "watches", "Footwear"]
    return (
        //<div>
        //     {Categories.toString()}
        //</div>

        //<div>
        //    <h3>All Categories</h3>
        //    <ul>
        //        <li> {Categories.join()} </li>       
        //    </ul>
        //</div>
        
        <div className="container mt-4 border" >
            <h3>All Categories</h3>
            <ul>
                {
                    Categories.map(
                        category => <li key={category}> {category} </li>    
                    )
                }
            </ul>

            <h3>All Categories</h3>
            <ol>
                {
                    Categories.map(
                        category => <li key={category}> {category} </li>
                    )
                }
            </ol>

            <h3>Select Category</h3>
            <select className="form-select-md">
                <option>select one</option>
                {
                    Categories.map(
                        category => <option key={category} >  {category}</option>
                    )
                }    
            </select>

            <h3>Check Category</h3>
            {
                    Categories.map(
                        category => <span key={category}> 
                                        <input type="checkbox" name="check" key={category}/> {category} 
                                    </span> 
                    )
            } 
        </div>  
    )
}   */


/*export function DataBinding(){
    //embedded object 
    const Product = {
        Name:"Iphone 11",
        Price:55323.88,
        Stock:true,
        Rating:{
            Rate:4.4,
            Count:382
        },
        ShippedTo:["Kolkata", "Delhi", "Bangalore"],
        Image : "images/iphone11.jpg"
    }
    return (
        <div className="container" style={ { marginTop:"50px"} }>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>
                <dt>Price</dt>
                <dd>{Product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(Product.Stock===true)? "Available":"Out of stock"}</dd>
                <dt>Rating</dt>
                <dd>
                    <span className="bi bi-star-fill text-success"></span> {Product.Rating.Rate} [{Product.Rating.Count}]
                </dd>
                <dt>ShippedTo</dt>
                <dd>
                    <ol>
                        {
                            Product.ShippedTo.map(
                                place => <li key={place}>{place}</li>
                            )
                        }
                    </ol>
                </dd>
                <dt>Photo</dt>
                <dt> <img src={Product.Image} width="250" height="150" /> </dt>
            </dl>
        </div>
    )
}   */


/*export function DataBinding(){
    //array of object
    const menu = [
        {category:"Mobile", product:["Sumsung","Iphone","Oneplus"] },
        {category:"Laptop", product:["HP","Apple","Asus"]}
    ]

    return (
        <div>
            <h2>Menu</h2>
            <ol>
                {
                    menu.map(item =>
                            <li key={item.category}> {item.category} 
                                <ul>
                                    {
                                        item.product.map( prod =>
                                            <li key={prod}> {prod} </li>
                                        )
                                    }
                                </ul>
                            </li>
                        )
                }
            </ol>

            <h2>Select Product</h2>
            <select>
                {
                    menu.map( item =>
                        <optgroup label={item.category} key={item.category}>
                            {
                                item.product.map(prod =>
                                    <option key={prod} >{prod}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>

        </div>
    )

}   */


/*export function DataBinding(){
    //array of JSON table view
    const product = [
        {name:"Iphone11", price:55000.00, photo:"images/iphone11.jpg"},
        {name:"Iphone10", price:65000.00, photo:"images/iphone11.jpg"}
    ]

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map( item =>
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td> 
                                <img src={item.photo} width="100" height="100"></img>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    )
}   */


//card view 
export function DataBinding(){
    const products = [
        {name:"Iphone11", price:55000.00, photo:"images/iphone11.jpg", rating:{rate:4.2, count:32} },
        {name:"Iphone10", price:65000.00, photo:"images/iphone11.jpg", rating:{rate:4.1, count:49} }
    ]

    return (
        <div className="container-fluid">
            <h1>Cards view</h1>
            <div className="d-flex flex-wrap">
                {
                    products.map( item =>
                        <div className="card p-3 m-2 w-25" key={item.name}>
                            <img className="card-image-top" src={item.photo} ></img>
                            <div className="card-header">
                                <h3>{item.name}</h3>
                            </div>   
                            <div className="card-body">
                                <table>
                                    <tbody>
                                    <tr>
                                        <th>Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
                                        <td>:&nbsp;&nbsp;{item.price}</td>
                                    </tr>
                                    <tr>
                                        <th>Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> 
                                        <td>:&nbsp;&nbsp; 
                                            <span className="bi bi-star-fill text-success"></span>
                                            {item.rating.rate}[{item.rating.count}]
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="card-footer">
                                <button className="btn btn-danger w-100">
                                <span className="bi bi-cart4"></span> Add to Cart
                                </button>
                            </div>
                        </div>

                    
                    )
                }
            </div>
        </div>
    )

}





























