import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import PersonalInfo from "./PersonInfo";
import EducationDetails from "./EducationalDetails";
import CoinBalance from "./CoinBalance";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    mobile: "",
    profilePic: "",
    linkedinLink: "",
    githubLink: "",
    resume: "",
  });

  const [education, setEducation] = useState({
    type: "",
    school: "",
    startDate: "",
    endDate: "",
  });

  const [project, setProject] = useState({
    projectName: "",
    projectDesc: "",
    projectLink: "",
  });

  const [totalCoins, setTotalCoins] = useState(0);

  const pointTable = {
    personalInfo: {
      name: 1,
      mobile: 15,
      profilePic: 5,
      linkedinLink: 3,
      githubLink: 5,
      resume: 20,
    },
    education: { type: 5, school: 5, startDate: 2, endDate: 2 },
    project: { projectName: 5, projectDesc: 6, projectLink: 10 },
  };

  const updateCoins = () => {
    let newTotalCoins = 0;

    for (const key in personalInfo) {
      if (personalInfo[key]) {
        newTotalCoins += pointTable.personalInfo[key];
      }
    }

    for (const key in education) {
      if (education[key]) {
        newTotalCoins += pointTable.education[key];
      }
    }

    for (const key in project) {
      if (project[key]) {
        newTotalCoins += pointTable.project[key];
      }
    }

    setTotalCoins(newTotalCoins);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    updateCoins();
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
    updateCoins();
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({ ...prevProject, [name]: value }));
    updateCoins();
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    const userData = {
      personalInfo,
      education,
      project,
      totalCoins,
    };
    const username = personalInfo.name.toLowerCase().replace(/\s/g, "-");
    navigate(`/dashboard/${username}`, { state: userData });
  };
  return (
    <div className="p-8 space-y-8">
      <CoinBalance totalCoins={totalCoins} />
      <div className="flex flex-row gap-4">
        <PersonalInfo
          personalInfo={personalInfo}
          onChange={handlePersonalInfoChange}
        />
        <EducationDetails
          education={education}
          onChange={handleEducationChange}
        />
        <ProjectDetails project={project} onChange={handleProjectChange} />
      </div>
      <button
        className="rounded-lg py-4 px-8 bg-blue-600 text-white"
        onClick={handleSubmit}
      >
        Create Profile
      </button>
    </div>
  );
};

export default Profile;
