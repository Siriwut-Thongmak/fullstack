package com.pretest.fullstack.entity;

import lombok.Data;

@Data
public class SmokeCountResponse {
    private int smoke;
    private int notSmoke;

    public SmokeCountResponse(int smoke, int notSmoke) {
        this.smoke = smoke;
        this.notSmoke = notSmoke;
    }
}
