package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "goals")
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String status;

    private Integer progress;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public Goal() {
    }

    public Goal(
            String title,
            String description,
            String status,
            Integer progress,
            Employee employee) {

        this.title = title;
        this.description = description;
        this.status = status;
        this.progress = progress;
        this.employee = employee;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getStatus() {
        return status;
    }

    public Integer getProgress() {
        return progress;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setProgress(Integer progress) {
        this.progress = progress;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}