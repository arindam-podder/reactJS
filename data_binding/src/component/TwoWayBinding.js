// useState() use

import {useState} from 'react';


/*export function TwoWayBinding(){    
   
    var cities = "hello";   
    // if we dont use useState ,  react can not recognize the changes , check broeser , in mouseover it is not 
    //changing from 'hello' to 'hi' 
    function change(){
        cities = "hi";
    }

    return(
        <div onMouseOver={change}>
            {cities}
        </div>
    )
}   */


/*export function TwoWayBinding(){

    var [data, setData] =  useState("Hello");

    function change(){
        if( data == "Hello"){
            setData( "Hello Arindam" );
        }else{
            setData( "Hello");
        }
    }

    return (
        <div className="text-center" style={ {marginTop:"100px", color:"red"} }  onMouseOver={change} onMouseOut={change}>
            Two Way DataBinding {data}
        </div>
    )
}   */



/*
    //city change , select option use 
export function TwoWayBinding(){
    const cities  = ["All", "Kolkata", "Delhi", "Bangalore"];
    const [city, setCity] = useState("All")
    function cityChange(event){
        setCity(event.target.value)
    }
    return (
        <div>
            <select onChange={cityChange} value={city}>
                {
                    cities.map( city =>
                        <option key={city} value={city}> {city} </option> 
                    )
                }          
            </select>
            <br></br>
            <br></br>
            <div>
                City is <b>'{city}' </b>
            </div>
        </div>
    )
}   */


export function TwoWayBinding(){
    //const [product, setProduct] = useState({name:"Tv", price:15499, stock:true, city:"City"})
    const [product, setProduct] = useState({})
    const cities = ["Mumbai", "Kolkata", "Delhi", "Bangalore"]
    
    function register(){
        setProduct(
            {
                name:document.getElementById("name").value,
                price:document.getElementById("price").value,
                stock: (document.getElementById("stock")===true)? "Available":"Out of stock",
                city:document.getElementById("shippedTo").value
            }
        )

            
        setTimeout(function(){
            setProduct({})
            document.getElementById("name").value = ""
            document.getElementById("price").value = ""
            document.getElementById("stock").checked = false
            document.getElementById("shippedTo").value = "select one"
        } , 6000)

    }



    return(
        <div className='container-fluid'>
            <div className="row">
                <div className='col-6' style={{borderRight :"2px solid black"}}>
                    <h3 className='text-center'>Register Product</h3>
                    <dl className='ms-4'>
                        <dt>Name</dt> 
                        <dd><input type="text" className='form-control-sm w-50' id='name' ></input> </dd>
                        <dt>Price</dt>
                        <dd><input type="number" className='form-control-sm w-50' id='price' ></input> </dd>
                        <dt>Stock</dt>
                        <dd className='form-switch'><input type="checkbox" className='form-check-input' id='stock' ></input> </dd>
                        <dt>Shipped To</dt>
                        <dd>
                            <select value={product.city} className="form-select-sm w-50" id='shippedTo'> 
                                <option>select one</option>
                                {
                                    cities.map(city =>
                                        <option key={city}>{city}</option>    
                                    )
                                }
                            </select>
                        </dd>
                    </dl>
                    <button type='button' onClick={register}> Register </button>
                </div>
                <div className='col-6'>
                    <h3 className='text-center'>Product Details</h3> 
                    <dl className='ms-4'>
                    <dt>Name</dt>
                        <dd>{product.name}</dd>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Stock</dt>
                        <dd>{product.stock}</dd>
                        <dt>Shipped To</dt>
                        <dd>{product.city}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}


















