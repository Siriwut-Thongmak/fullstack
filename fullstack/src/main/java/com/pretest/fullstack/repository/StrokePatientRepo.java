package com.pretest.fullstack.repository;

import com.pretest.fullstack.entity.GenderCountResponse;
import com.pretest.fullstack.entity.stroke_patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface StrokePatientRepo extends JpaRepository<stroke_patient,Integer> {

    Optional<stroke_patient> findByName(String name);

    @Query(value =  "SELECT COUNT(*) as 'countAll' FROM stroke_patient;", nativeQuery = true)
    public int getSumAll();

    @Query(value = "SELECT COUNT(stroke) AS 'Stroke Patients' FROM `stroke_patient` WHERE stroke = 'Yes';", nativeQuery = true)
    public int getSumPatient();

    @Query(value = "SELECT AVG(age) as 'Averge Age' FROM stroke_patient WHERE stroke = 'Yes';", nativeQuery = true)
    public float getAvgAgePatient();

    @Query(value = "SELECT AVG(bmi) as 'Averge BMI' FROM stroke_patient WHERE stroke = 'Yes';", nativeQuery = true)
    public float getAvgBMIStroke();

    @Query(value = "SELECT AVG(blood_sugar_level) as 'Averge Sugar' FROM stroke_patient WHERE stroke = 'Yes';", nativeQuery = true)
    public float getAvgSugarStroke();

    @Query(value = "SELECT AVG(cholesterol_level) as 'Averge Fat' FROM stroke_patient WHERE stroke = 'Yes';", nativeQuery = true)
    public float getAvgFatStroke();

    @Query(value = "SELECT (SELECT COUNT(gender) FROM stroke_patient WHERE gender = 'Male' AND stroke = 'Yes') as 'Male', " +
            "(SELECT COUNT(gender) FROM stroke_patient WHERE gender = 'Female' AND stroke = 'Yes') as 'Female' " +
            "FROM stroke_patient LIMIT 1;", nativeQuery = true)
    public GenderCountResponse getCountGenderStoke();
}
