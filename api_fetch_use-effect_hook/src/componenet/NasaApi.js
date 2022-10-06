import { useEffect, useState } from "react";



export function NasaApi(){
    const [marsObject, setMarsObject] = useState([]);

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")     //link access prob
        .then(response => response.json())
        .then(data=> {
            setMarsObject(data.photos);
        })
    },[]);

    return(
        <div className="container-fluid d-flex flex-wrap" style={ {height:"400px", overflow:"scroll"} }>
            <h2 style={{position:"sticky", top:"0"}} >Mars Rover Photos</h2>
            <table className="table table-hover table-responsive table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        marsObject.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <a href={item.img_src} target="_blank">
                                    <img src={item.img_src} width="100" height="100" />
                                    </a>
                                </td>
                                <td>
                                    {item.camera.full_name}
                                </td>
                                <td>
                                    {item.rover.name}
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}