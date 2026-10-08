package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "performance")
public class Performance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double score;

    private String rating;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public Performance() {
    }

    public Performance(
            Double score,
            String rating,
            Employee employee) {

        this.score = score;
        this.rating = rating;
        this.employee = employee;
    }

    public Long getId() {
        return id;
    }

    public Double getScore() {
        return score;
    }

    public String getRating() {
        return rating;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}