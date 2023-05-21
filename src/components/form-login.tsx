import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';


interface DataForm {
    email: string;
    password: string;
};

export const FormLogin: React.FC = () => {

 const schema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required(),
    password: Yup.string().min(4).required()
 });


    const submitForm = (values: DataForm) => {
    //    console.log(values); 
    };

 const { handleSubmit, handleChange, handleReset, errors, values } = useFormik({
   initialValues: {
     email: "",
     password: "",
   },
   onSubmit: submitForm,
    validationSchema: schema,
});

 console.log( values);

  return (
    <div>
      <h1>Form Login</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />{" "}
        <br />
        {errors.email && <span>Invalid Email</span>}
        <br /> <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <br />
        {errors.password && (
          <span>The password must be minimum 4 characters</span>
        )}
        <br /> <br />
        <button type="submit">Login</button> &nbsp;
        <button type="reset">Reset values</button>
      </form>
    </div>
  );
}
