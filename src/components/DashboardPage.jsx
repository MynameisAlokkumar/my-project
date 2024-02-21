import React from "react";
import { useParams, useLocation } from "react-router-dom";
import coin from "../assets/coin_image.png";
const DashboardPage = () => {
  const { name } = useParams();
  const location = useLocation();

  const userData = location.state;
  return (
    <div className="w-1/2 m-auto mb-10">
      <div className="w-full p-8 border border-neutral-300 rounded-lg flex gap-8">
        <img src={userData.personalInfo.profilePic} alt="Profile" width="100" />
        <div>
          <h1 className="font-bold text-xl mb-4">{name}'s Dashboard</h1>
          <p>Mobile: {userData.personalInfo.mobile}</p>
          <p>LinkedIn: {userData.personalInfo.linkedinLink}</p>
          <p>Github: {userData.personalInfo.githubLink}</p>
        </div>
      </div>

      <div className="w-full p-8 border border-neutral-300 rounded-lg">
        <h2 className="font-bold text-xl mb-4">Educational Details</h2>
        <p>Type: {userData.education.type}</p>
        <p>School/College: {userData.education.school}</p>
        <p>Start Date: {userData.education.startDate}</p>
        <p>End Date: {userData.education.endDate}</p>
      </div>

      <div className="w-full p-8 border border-neutral-300 rounded-lg">
        <h2 className="font-bold text-xl mb-4">Project Details</h2>
        <p>Project Name: {userData.project.projectName}</p>
        <p>Project Description: {userData.project.projectDesc}</p>
        <p>Project Link: {userData.project.projectLink}</p>
      </div>

      <div className="w-full p-8 border border-neutral-300 rounded-lg">
        <img src={coin} alt="" width="100px" />
        <h2 className="font-bold text-xl text-neutral-500">
          Total Coins Earned
        </h2>
        <p className="font-bold text-4xl">{userData.totalCoins}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
