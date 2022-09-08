
import "./NetflixMain.css"
import { Register } from "./NetflixRegister"

export function NetflixMain(){
    return (
        <div className="main">
            <div className="text-white text-center">
                <h1>Unlimited Movies, TV Shows and More</h1>
                <h3>Watch anywhere, Cancel anytime.</h3>
                <div>
                    <Register />
                </div>
            </div>
        </div>
    )
}