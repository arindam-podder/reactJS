import './App.css';
import React from 'react';
import { useFormik } from 'formik';


function App() {

  const formInitValue = {
    fName:"",
    lName:"",
    email:"",
    mobileNo:""
  }

  const formSubmit = function(data){
    console.log(data)
    document.getElementById("dataDisplay").style.display="block";
  }

  const frmValidate = (data) => {
    const error = {}
    if(!data.fName){
      error.fName = "Required"
    }
    if(!data.lName){
      error.lName = "Required"
    }
    if(!data.email){
      error.email = "Required"
    }
    if(!data.mobileNo){
      error.mobileNo = "Required"
    }
    return error;
  }

  function hideDataDisplay(){
    document.getElementById("dataDisplay").style.display="none";
  }

  const formik = useFormik({
    initialValues:formInitValue,
    onSubmit:formSubmit,
    validate:frmValidate
  });

  console.log( "error =", formik.errors)
  console.log("touched =", formik.touched)
  return (
    <div className="App">
      <h3>Formik use in React</h3>
      <form onMouseOver={hideDataDisplay}>
        <label>First Name</label>
        <input 
          type="text" 
          id="fName" 
          name="fName" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.fName}
        />
        { (formik.touched.fName && formik.errors.fName) ? <div style={{color:"red"}}>{formik.errors.fName}</div> : null}
        <br />
        <label>Last Name</label>
        <input 
          type="text" 
          id="lName" 
          name="lName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lName}
        />
        { (formik.touched.lName && formik.errors.lName) ? <div style={{color:"red"}}>{formik.errors.lName}</div> : null}
        <br />
        <label>Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        { (formik.touched.email && formik.errors.email) ? <div style={{color:"red"}}>{formik.errors.email}</div> : null}
        <br />
        <label>Mobile No</label>
        <input 
          type="text" 
          id="mobileNo" 
          name="mobileNo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobileNo}  
        /> 
        { (formik.touched.mobileNo && formik.errors.mobileNo) ? <div style={{color:"red"}}>{formik.errors.mobileNo}</div> : null}
        <br />
        <button type='button' onClick={formik.handleSubmit} >Submit</button>
      </form>

      <div id="dataDisplay" style={{marginTop:"20px",display:"none"}}>
        <h4>Here is form data</h4>
        { JSON.stringify(formik.values)}
      </div>

    </div>
  );
}

export default App;
