import { useLoaderData } from "react-router";
import JobCard from "../shared/JobCard";

const AllJobs = () => {
  const jobs = useLoaderData();
  return (
    <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center my-3  p-2 bg-base-200/20 shadow-2xl rounded-2xl">All jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};
export default AllJobs;
