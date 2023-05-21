import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

interface FormValues {
  name: string;
  age: number | string;
  telephones: string[];
}

export const FormRegister: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    age: "",
    telephones: [],
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.age) {
      errors.age = "Age is required";
    }

    return errors;
  };
//!

const telephonesItems = (
  arrayHelpers: {
    push: (value: any) => void;
    remove: (index: number) => void;
  },
  values: FormValues,
  setFieldValue: (field: string, value: any) => void
) => {
  const { push, remove } = arrayHelpers;

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTelephones = [...values.telephones];
    newTelephones[index] = event.target.value;
    setFieldValue("telephones", newTelephones);
  };

  return (
    <div>
      <h3>Telephones</h3>
      <div>
        {values &&
          values.telephones.map((item: any, index: number) => (
            <div key={index}>
              <input
                type="text"
                placeholder={`telephones ${index + 1}`}
                value={values.telephones[index]}
                name={`telephones[${index}]`}
                onChange={(event) => handleChange(index, event)}
              />
              <div>
                <button type="button" onClick={() => push("")}>
                  Add
                </button>
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};


//!

  return (
    <div>
      <h1>Form Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <Field
                type="number"
                id="age"
                name="age"
                placeholder="Enter your age"
              />
              <ErrorMessage name="age" component="div" />
            </div>

            <div>
              <FieldArray name="telephones">
                {({ push, remove }) =>
                  telephonesItems({ push, remove }, values, handleChange)
                }
              </FieldArray>
            </div>

            <div>
              <button type="submit">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
