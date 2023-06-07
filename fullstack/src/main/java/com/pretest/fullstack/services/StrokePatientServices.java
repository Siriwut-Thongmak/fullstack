package com.pretest.fullstack.services;

import com.pretest.fullstack.entity.stroke_patient;
import com.pretest.fullstack.repository.StrokePatientRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StrokePatientServices {

    private final StrokePatientRepo repository;
    public StrokePatientServices(StrokePatientRepo repository) {
        this.repository = repository;
    }

    public stroke_patient addPatient(String name, int age, String gender , float cholesterol_level,
                                     float blood_sugar_level, String is_smoke, int bmi, String stroke){
        stroke_patient entity = new stroke_patient();
        entity.setName(name);
        entity.setAge(age);
        entity.setGender(gender);
        entity.setCholesterol_level(cholesterol_level);
        entity.setBlood_sugar_level(blood_sugar_level);
        entity.setIs_smoke(is_smoke);
        entity.setBmi(bmi);
        entity.setStroke(stroke);

        return repository.save(entity);
    }

    public stroke_patient updateData(int id, String name, int age, String gender , float cholesterol_level,
                                        float blood_sugar_level, String is_smoke, int bmi, String stroke){

        Optional<stroke_patient> opt = repository.findById(id);
        stroke_patient patient = opt.get();
        patient.setName(name);
        patient.setAge(age);
        patient.setGender(gender);
        patient.setCholesterol_level(cholesterol_level);
        patient.setBlood_sugar_level(blood_sugar_level);
        patient.setIs_smoke(is_smoke);
        patient.setBmi(bmi);
        patient.setStroke(stroke);
        return repository.save(patient);
    }
}
