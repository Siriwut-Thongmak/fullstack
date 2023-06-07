package com.pretest.fullstack.api;

import com.pretest.fullstack.business.StrokePatientBusiness;
import com.pretest.fullstack.entity.GenderCountResponse;
import com.pretest.fullstack.entity.SmokeCountResponse;
import com.pretest.fullstack.entity.stroke_patient;
import com.pretest.fullstack.repository.StrokePatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/StokePatient")
@CrossOrigin
public class StrokePatientApi {

    private final StrokePatientBusiness business;
    private final StrokePatientRepo repository;

    public StrokePatientApi(StrokePatientBusiness business, StrokePatientRepo repository) {
        this.business = business;
        this.repository = repository;
    }

    private JdbcTemplate jdbcTemplate;
    @Autowired
    public void GenderCountController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @PostMapping("/add")
    public stroke_patient addStrokePatient(@RequestBody stroke_patient request) {
        stroke_patient response = business.addStrokePatient(request);
        return response;
    }

    @GetMapping("/getData")
    public List<stroke_patient> getAllData() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<stroke_patient> getDataById(@PathVariable("id") int id) {
        return repository.findById(id);
    }

    @PutMapping("/update/{id}")
    public stroke_patient updatePatient(@RequestBody stroke_patient request) {
        stroke_patient response = business.updatePatient(request);
        return response;
    }

    @DeleteMapping("/delete/{id}")
    public void deletePatient(@PathVariable("id") int id) {
        repository.deleteById(id);
    }

    @GetMapping("/getSumAll")
    public int SumAll(){
        return repository.getSumAll();
    }

    @GetMapping("/getSumPatient")
    public int SumPatient(){
        return repository.getSumPatient();
    }


    @GetMapping("/getAvgAgePatient")
    public float AvgAgePatient(){
        return repository.getAvgAgePatient();
    }

    @GetMapping("/getCountGenderStoke")
    public GenderCountResponse getGenderCount() {
        String sql = "SELECT (SELECT COUNT(gender) FROM stroke_patient WHERE gender = 'Male' AND stroke = 'Yes') as Male, " +
                "(SELECT COUNT(gender) FROM stroke_patient WHERE gender = 'Female' AND stroke = 'Yes') as Female " +
                "FROM stroke_patient LIMIT 1";

        GenderCountResponse response = jdbcTemplate.queryForObject(sql, (resultSet, rowNum) -> {
            int maleCount = resultSet.getInt("Male");
            int femaleCount = resultSet.getInt("Female");
            return new GenderCountResponse(maleCount, femaleCount);
        });

        return response;
    }

    @GetMapping("/getAvgBMIStroke")
    public float getAvgBMIStroke(){
        return repository.getAvgBMIStroke();
    }

    @GetMapping("/getAvgSugarStroke")
    public float getAvgSugarStroke(){
        return repository.getAvgSugarStroke();
    }

    @GetMapping("/getAvgFatStroke")
    public float getAvgFatStroke(){
        return repository.getAvgFatStroke();
    }

//    @GetMapping("/getFat_Stroke")
//    public List<Integer> getFatStroke(){
//        String sql = "SELECT cholesterol_level as fat FROM stroke_patient WHERE stroke = 'Yes'";
//        List<Integer> cholesterolLevels = jdbcTemplate.query(sql, (resultSet, rowNum) -> resultSet.getInt("fat"));
//        return cholesterolLevels;
//    }

   @GetMapping("/getSmoke_Stroke")
    public SmokeCountResponse getSmokeCount(){
        String sql = "SELECT (SELECT COUNT(is_smoke) FROM stroke_patient WHERE is_smoke = 'Yes' AND stroke = 'Yes') as 'smoke', " +
                "(SELECT COUNT(is_smoke) FROM stroke_patient WHERE is_smoke = 'No' AND stroke = 'Yes') as 'notSmoke' " +
                "FROM stroke_patient LIMIT 1;";
       SmokeCountResponse response = jdbcTemplate.queryForObject(sql, (resultSet, rowNum) -> {
           int smokeCount = resultSet.getInt("smoke");
           int no_smokeCount = resultSet.getInt("notSmoke");
           return new SmokeCountResponse(smokeCount, no_smokeCount);
       });
        return  response;
   }
}
