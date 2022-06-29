import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikYupPage() {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Campo Obligatorio")
        .max(15, "máximo 15 caracteres"),
      lastName: Yup.string()
        .required("Campo Obligatorio")
        .max(15, "máximo 15 caracteres"),
      email: Yup.string()
        .required("Campo Obligatorio")
        .email("email no válido"),
    }),
  });

  return (
    <div>
      <h1>Formik basic</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName"> Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email"> Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
