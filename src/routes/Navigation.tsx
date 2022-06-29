import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import FormikAbstractPage from "../03-forms/pages/FormikAbstractPage";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikComponentsPage from "../03-forms/pages/FormikComponentsPage";
import FormikYupPage from "../03-forms/pages/FormikYupPage";
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik basic form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikYup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikComponents"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikAbstract"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik" element={<FormikBasicPage />} />
          <Route path="formikYup" element={<FormikYupPage />} />
          <Route path="formikComponents" element={<FormikComponentsPage />} />
          <Route path="formikAbstract" element={<FormikAbstractPage />} />
          <Route path="users" element={<>users component</>} />
          <Route path="home" element={<>home component</>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
