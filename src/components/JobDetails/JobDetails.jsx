import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="w-full px-4 py-8 md:px-16 bg-white/70 md:my-4 my-2 rounded-2xl text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-24 h-24 object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-lg text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
          </div>
        </div>

        {/* Two Column Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Job Description</h2>
              <p>{job.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Salary</h2>
              <p>
                {job.salaryRange.min.toLocaleString()} -{" "}
                {job.salaryRange.max.toLocaleString()}{" "}
                {job.salaryRange.currency.toUpperCase()}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Category & Type</h2>
              <p>
                {job.category} — {job.jobType}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Application Deadline</h2>
              <p>{job.applicationDeadline}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Requirements</h2>
              <ul className="list-disc list-inside">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Responsibilities</h2>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* HR Contact */}
        <div className="mt-8 text-sm text-gray-600">
          <p>
            HR Contact: {job.hr_name} ({job.hr_email})
          </p>
        </div>

        {/* Apply Button */}
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
