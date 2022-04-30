import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "../routes/routes";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="" />
            <ul>
              {routes.map((route, key) => (
                <li key={key}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                element={<route.Component />}
              />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
