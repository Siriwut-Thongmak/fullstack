package com.pretest.fullstack.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class stroke_patient {
    @Id //set id as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 5, nullable = false, updatable = false)
    private int id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private float cholesterol_level;

    @Column(nullable = false)
    private float blood_sugar_level;

    @Column(length = 3, nullable = false)
    private String is_smoke;

    @Column(nullable = false)
    private int bmi;

    @Column(length = 3, nullable = false)
    private String stroke;

}
