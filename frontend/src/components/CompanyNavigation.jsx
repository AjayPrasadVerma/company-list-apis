import { NavLink } from "react-router-dom";
import classes from "./CompanyNavigation.module.css";

function CompanyNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/company"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Companies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/company/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Company
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default CompanyNavigation;
