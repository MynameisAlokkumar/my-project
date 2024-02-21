import React from "react";

const ProjectDetails = ({ project, onChange }) => {
  return (
    <div className="w-full h-fit p-8 border border-neutral-300 rounded-lg">
      <h2 className="font-bold text-xl mb-4">Project Details</h2>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="projectName">Project Name:</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="projectName"
          name="projectName"
          value={project.projectName}
          onChange={onChange}
          placeholder="Enter the name of your project"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="projectDesc">Project Description</label>
        <textarea
          className="rounded-md p-4 border border-neutral-400"
          id="projectDesc"
          name="projectDesc"
          value={project.projectDesc}
          onChange={onChange}
          placeholder="Enter the description of your project"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="projectLink">Project Link</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="projectLink"
          name="projectLink"
          value={project.projectLink}
          onChange={onChange}
          placeholder="Enter the link to your project"
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
