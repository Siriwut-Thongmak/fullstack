package com.pretest.fullstack.entity;

import lombok.Data;

@Data
public class GenderCountResponse {
    private int male;
    private int female;

    public GenderCountResponse(int male, int female) {
        this.male = male;
        this.female = female;
    }
}
