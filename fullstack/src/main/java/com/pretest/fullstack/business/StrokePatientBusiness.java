package com.pretest.fullstack.business;

import com.pretest.fullstack.entity.stroke_patient;
import com.pretest.fullstack.services.StrokePatientServices;
import org.springframework.stereotype.Service;

@Service
public class StrokePatientBusiness {

    private final StrokePatientServices strokePatientServices;
    public StrokePatientBusiness(StrokePatientServices strokePatientServices) {
        this.strokePatientServices = strokePatientServices;
    }

    public stroke_patient addStrokePatient(stroke_patient request) {

        //TODO: Verify and Validate name, is_smoke, stroke

        stroke_patient patient = strokePatientServices.addPatient(request.getName(),request.getAge(),request.getGender(),
                request.getCholesterol_level(),request.getBlood_sugar_level(),request.getIs_smoke(),request.getBmi(),
                request.getStroke());
        return patient;
    }

    public stroke_patient updatePatient(stroke_patient request) {

        //TODO: Verify and Validate name, is_smoke, stroke

        stroke_patient patient = strokePatientServices.updateData(request.getId(),request.getName(),request.getAge(),request.getGender(),
                request.getCholesterol_level(),request.getBlood_sugar_level(),request.getIs_smoke(),request.getBmi(),
                request.getStroke());
        return patient;
    }
}
