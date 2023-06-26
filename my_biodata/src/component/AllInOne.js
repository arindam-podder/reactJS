import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../node_modules/bootstrap/dist/js/bootstrap';
import NavBar from "./Nav";

export function AllOnePlace(){

    return(
        <div>

            {/* <div className="bg-info row p-2">
              <h5 className=" col-2"> <b>MyBiodata</b> </h5>
              <div className="d-flex col-10">
                <a className="nav-link active me-4" aria-current="page" href="#"><b style={ {"text-decoration": "underline",} }> Resume </b></a> 
                <a className="nav-link dropdown" aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> <b>Social Media </b> </a>
              </div> 
            </div> */}

            <NavBar />


            <div className="w-100" style={{"marginTop": "55px"}}>
                <img src="images/resume-page1.jpg" className="w-100"></img>
                <img src="images/resume-page2.jpg" className="w-100"></img>
            </div>
            

        
<div className="modal  fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Social Media platform link</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <ul>
            <li> <a href="https://github.com/arindam-podder" target={"_blank"}>Github</a> </li>
            <li> <a href="https://www.linkedin.com/in/arindam-podder-b298bb183/" target={"_blank"}>LinkedIn</a> </li>
            <li> <a href="https://www.facebook.com/profile.php?id=100007965974912" target={"_blank"}>Facebook</a> </li>
            <li> <a href="https://www.instagram.com/arindam_podder/" target={"_blank"}>Instagram</a> </li>
            <li> <a href="https://www.youtube.com/@dynamitethegamer9304" target={"_blank"}>Youtube</a> </li>
        </ul>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

        
        </div>



    )
}