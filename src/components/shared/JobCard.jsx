import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const { _id, title, location, applicationDeadline, company, company_logo } =
    job;


  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="mt-4">
        <img src={company_logo} alt={company} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{company}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline"><CiLocationOn /> {location}</div>
          <div className="badge badge-outline">Deadline: {applicationDeadline}</div>
        </div>
        <div className="card-actions justify-center mt-2">
          <Link to={`/jobDetails/${_id}`} className="btn btn-primary w-full rounded-3xl">View Details</Link>
        </div>
      </div>
    </div>
  );
};
export default JobCard;
