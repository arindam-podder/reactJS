
import "./NetflixIndex.css"
import { NetflixHeader } from "./NetflixHeader"
import { NetflixMain } from "./NetflixMain"

export function NetflixIndex(){
    return (

        <div className="netflixBack">
            <div className="backgroundShade">
                <NetflixHeader />
                <NetflixMain />
            </div>
        </div>

    )
}