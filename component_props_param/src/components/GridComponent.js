export function GridTable(property){
    return(
        <div>
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        {
                            property.fields.map(fieldName => 
                                <th key={fieldName}>{fieldName}</th>    
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        property.data.map(item => 
                            <tr>
                                {
                                    // property.fields.map(fieldName => 
                                    //     <td key={item[fieldName]}>{item[fieldName]}</td>    
                                    // )  
                                    Object.keys(item).map(key => 
                                        <td>{item[key]}</td>    
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}