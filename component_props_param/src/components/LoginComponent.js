export function Login(property){
    return(
        <div>
            <h2>{property.title}</h2>
            <form>
                <dl>
                    <dt>User name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}