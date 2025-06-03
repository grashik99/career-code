import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";

const Links = () => {
  const { account_type } = use(AuthContext);
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>

      {account_type === "Employer" && (
        <>
          <li>
            <NavLink to="/addJobs">Add Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/myJobs">My Jobs</NavLink>
          </li>
        </>
      )}
      {account_type === "Job Seeker" && (
        <>
          <li>
            <NavLink to="/myApplication">My Application</NavLink>
          </li>
        </>
      )}
    </>
  );
};
export default Links;
