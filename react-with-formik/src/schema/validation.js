import * as yup from "yup";

const validationSchema = yup.object({
    fName : yup.string()
                .matches(/^[a-zA-Z]+$/, "only character allowed.(A-z)")
                .min(4, "minimum 4 character.")
                .max(30, "Allowed 30 character only.")
                .required("first name is required."),
    
    lName : yup.string()
                .matches(/^[a-zA-Z]+$/, "only character allowed.(A-z)")
                .min(4, "minimum 4 character.")
                .max(30, "Allowed 30 character only.")
                .required("first name is required."),

    email : yup.string()
                .email("enter valid email.")
                .required("email required."),

    mobileNo : yup.number("character does not allowed.")
                    .min(10, "enter valid number.")
                    .max(10, "enter valid number.")
                    .required("mobile number is required."),

    password : yup.string()
                    .min(5, "minimum 5 character allowed.")
                    .required("please enter password."),
    
    confirmPassword : yup.string()
                            .oneOf([yup.ref("password")], "password must match.")
                            .required("please enter confirm password.")
                
})


export default validationSchema;







