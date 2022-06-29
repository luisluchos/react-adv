import "../styles/styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikComponentsPage() {
  return (
    <div>
      <h1>Formik component</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Campo Obligatorio")
            .max(15, "máximo 15 caracteres"),
          lastName: Yup.string()
            .required("Campo Obligatorio")
            .max(15, "máximo 15 caracteres"),
          email: Yup.string()
            .required("Campo Obligatorio")
            .email("email no válido"),
          terms: Yup.boolean().oneOf([true], "debe aceptar condiciones"),
          jobType: Yup.string().required("Campo Obligatorio"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component={"span"} />

            <label htmlFor="lastName"> Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component={"span"} />

            <label htmlFor="email"> Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component={"span"} />

            <label>
              <Field name="terms" type="checkBox" /> Terms and conditions
            </label>
            <ErrorMessage name="terms" component={"span"} />

            <label htmlFor="jobType"> Email</label>
            <Field name="jobType" as="select">
              <option value="">Pick Something</option>
              <option value="dev">Dev</option>
              <option value="design">Design</option>
              <option value="it">It</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
