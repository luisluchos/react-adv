import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/myTextInput";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Campo Obligatorio")
            .max(15, "máximo 15 caracteres"),
          email: Yup.string()
            .required("Campo Obligatorio")
            .email("email no válido"),
          password1: Yup.string()
            .required("campo obligatorio")
            .min(6, "mínimo 6 carácteres")
            .required("Campo Obligatorio"),
          password2: Yup.string()
            .required("campo obligatorio")
            .oneOf([Yup.ref("password1")], "no coincide el password")
            .min(6, "mínimo 6 carácteres")
            .required("Campo Obligatorio"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label={"name"} name={"name"} placeholder={"Name"} />
            <MyTextInput label={"email"} name={"email"} type={"email"} />
            <MyTextInput
              label={"Password"}
              name={"password1"}
              type={"password"}
            />
            <MyTextInput
              label={"Repeat Password"}
              name={"password2"}
              type={"password"}
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
