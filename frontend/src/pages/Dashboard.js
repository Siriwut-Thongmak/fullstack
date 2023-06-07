import React from "react";
import { GetAvgAgePatient } from "../Report/AverageAge";
import { GetAvgFat } from "../Report/AverageFat";
import { GetAvgSugar } from "../Report/AverageSugar";
import { GetAvgBMIPatient } from "../Report/AvergageBMI";
import { GenderStrokeCount } from "../Report/GenderStrokeCount";
import { SmokeStroke } from "../Report/SmokeStroke";
import { GetSumPatient } from "../Report/Sumpatient";

export const Dashboard = () => {
  return (
    <React.Fragment>
      <h1
        style={{
          margin: "20px",
        }}
      >
        Summary of Stroke Patient's in our care.
      </h1>
      <GetSumPatient />
      <GetAvgAgePatient />
      <GetAvgBMIPatient />
      <GetAvgSugar />
      <GetAvgFat />
      <GenderStrokeCount />
      <SmokeStroke />
    </React.Fragment>
  );
};
