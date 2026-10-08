package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String status;

    private String priority;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    public Task() {
    }

    public Task(
            String title,
            String status,
            String priority,
            Employee employee) {

        this.title = title;
        this.status = status;
        this.priority = priority;
        this.employee = employee;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getStatus() {
        return status;
    }

    public String getPriority() {
        return priority;
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

    public void setStatus(String status) {
        this.status = status;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}