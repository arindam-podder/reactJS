


export function Register(){
    return (
        <div className="mt-4">
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control" placeholder="Email address" />
                <button className="btn btn-danger">Get started <span className="bi bi-chevron-right"></span> </button>
            </div>
        </div>
    )
}