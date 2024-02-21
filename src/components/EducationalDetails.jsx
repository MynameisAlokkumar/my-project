import React from "react";

const EducationDetails = ({ education, onChange }) => {
  return (
    <div className="w-full h-fit p-8 border border-neutral-300 rounded-lg">
      <h2 className="font-bold text-xl mb-4">Education Details</h2>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="type">Type (School/College)</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="type"
          name="type"
          value={education.type}
          onChange={onChange}
          placeholder="Enter the type of education"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="school">School/College</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="school"
          name="school"
          value={education.school}
          onChange={onChange}
          placeholder="Enter the name of your school/college"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="startDate">Start Date</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="date"
          id="startDate"
          name="startDate"
          value={education.startDate}
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="endDate">End Date</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="date"
          id="endDate"
          name="endDate"
          value={education.endDate}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default EducationDetails;
