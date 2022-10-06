import { useEffect, useState } from "react";


export function FakestoreApi(){

   // var [allProd, setAllProd ] = useState([])
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    function LoadProducts(){
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            setProducts(data)  
           // setAllProd(data)
        })
    }
    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then((response) => response.json())
        .then((data) => {
            data.unshift("all");
            setCategories(data)
        })
    }
    
    function categoryChange(event){
        // setProducts(
        //     allProd.filter( prod => prod.category === event.target.value ) 
        // )
        if(event.target.value === "all"){
            LoadProducts()
        }else{
            fetch("https://fakestoreapi.com/products/category/"+event.target.value)
            .then((response) => response.json())
            .then((data) => setProducts(data)  )
        }
    }

   // useEffect(function(){}) //simple function def, no arrow function
   useEffect( ()=>{
        LoadProducts();
        LoadCategories();       
   }, [])

   return (
        <div className="container-fluid">
            <header className="p-2 bg-danger" style={{position:"sticky", top:"0px"} }>
                <h2 className="text-center text-white"><span className="bi bi-cart"></span> FakeStore </h2>
            </header>
            <section className="row mt-1">
                <nav className="col-2" style={{borderRight:"1px solid #a6f5b0"}}> 
                    <h4>Select Categories</h4>
                    <select onChange={categoryChange}>
                        {
                            categories.map( category => 
                                <option key={category}> {category} </option>
                            )
                        }
                    </select>
                </nav>
                <main className="col-10" style={{height:"530px", overflow:"scroll"}}>
                    <h3 className="text-center">All products</h3>
                    <div className="d-flex flex-wrap">
                        {
                            products.map( product =>
                                <div className="card m-2 p-1" style={{width:"22%"}}>
                                    <img className="card-img-top" src={product.image} height="140"/>
                                    <div className="card-header">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd> <span className=" text-success bi bi-star-fill"></span> {product.rating.rate}</dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                    <button  id={product.id} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span>
                                        Add to Cart
                                    </button>
                                </div>
                                </div>
                            )
                        }    
                    </div>
                </main>
            </section>
            <footer className="p-2 bg-primary mt-1" style={{position:"sticky",  bottom:"0px"} }>
                <div className="d-flex justify-content-around" style={ {marginLeft:"250px", marginRight:"250px"} }>
                    <h5>instagram</h5>
                    <h5>&copy;copyright</h5>
                    <h5>facebook</h5>
                </div>   
            </footer>
        </div>   
   )
}