import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/myTextInput";
import { MySelect } from "../components/mySelect";
import { MyCheckBox } from "../components/myCheckBox";

export default function FormikAbstractPage() {
  return (
    <div>
      <h1>Formik abstract</h1>
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
            <MyTextInput
              label={"First name"}
              name={"firstName"}
              placeholder={"First name"}
            />
            <MyTextInput label={"Last name"} name={"lastName"} />
            <MyTextInput label={"email"} name={"email"} type={"email"} />

            <MySelect name="jobType" label="Job type">
              <option value="">Pick Something</option>
              <option value="dev">Dev</option>
              <option value="design">Design</option>
              <option value="it">It</option>
            </MySelect>

            <MyCheckBox label={"Terms and conditions"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
