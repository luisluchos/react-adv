import { useField, ErrorMessage } from "formik";
interface Props {
  label: string;
  name: string;
  [x: string]: any; //permite añadir cualuier propiedad
}
export const MyCheckBox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input className="" type="checkbox" {...field} {...props} />
        {label}
      </label>

      <ErrorMessage name={props.name} component="span" className="" />
    </>
  );
};
