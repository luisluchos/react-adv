import formJson from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MyTextInput } from "../components/myTextInput";
import { MySelect } from "../components/mySelect";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue; //hace como return
  let schema = Yup.string();
  for (const rule of input.validations) {
    //rules
    if (rule.type === "required") {
      schema = schema.required("campo obligatorio");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value,
        `Min de ${(rule as any).value} carácteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("email no válido");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(
              ({ value, label, type, name, placeholder, options }) => {
                if (
                  type === "input" ||
                  type === "password" ||
                  type === "email"
                ) {
                  return (
                    <MyTextInput
                      key={name}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                      type={type as any}
                    />
                  );
                } else if (type === "select") {
                  return (
                    <MySelect key={name} label={label} name={name}>
                      {options?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </MySelect>
                  );
                }
              }
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
