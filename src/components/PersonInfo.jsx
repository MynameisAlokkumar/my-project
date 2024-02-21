import React from "react";

const PersonalInfo = ({ personalInfo, onChange }) => {
  return (
    <div className="w-full p-8 border border-neutral-300 rounded-lg">
      <h2 className="font-bold text-xl mb-4">Personal Information</h2>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="name">Name</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={onChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="mobile">Mobile</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="mobile"
          name="mobile"
          value={personalInfo.mobile}
          onChange={onChange}
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="profilePic">Profile Picture</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="profilePic"
          name="profilePic"
          value={personalInfo.profilePic}
          onChange={onChange}
          placeholder="Enter profile URL"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="linkedinLink">LinkedIn Link</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="linkedinLink"
          name="linkedinLink"
          value={personalInfo.linkedinLink}
          onChange={onChange}
          placeholder="Enter your LinkedIn profile link"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="githubLink">GitHub Link</label>
        <input
          className="rounded-md h-10 p-4 border border-neutral-400"
          type="text"
          id="githubLink"
          name="githubLink"
          value={personalInfo.githubLink}
          onChange={onChange}
          placeholder="Enter your GitHub profile link"
        />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="resume">Resume</label>
        <input
          className="h-10 "
          type="file"
          id="resume"
          name="resume"
          value={personalInfo.resume}
          onChange={onChange}
          placeholder="Paste your resume URL"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
