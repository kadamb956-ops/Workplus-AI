package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.GoalRepository;
import com.example.demo.repository.PerformanceRepository;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final EmployeeRepository employeeRepository;
    private final PerformanceRepository performanceRepository;
    private final GoalRepository goalRepository;
    private final TaskRepository taskRepository;

    public AnalyticsController(
            EmployeeRepository employeeRepository,
            PerformanceRepository performanceRepository,
            GoalRepository goalRepository,
            TaskRepository taskRepository) {

        this.employeeRepository = employeeRepository;
        this.performanceRepository = performanceRepository;
        this.goalRepository = goalRepository;
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public Map<String, Object> getAnalytics() {

        Map<String, Object> analytics =
                new HashMap<>();

        analytics.put(
                "totalEmployees",
                employeeRepository.count()
        );

        analytics.put(
                "totalPerformanceRecords",
                performanceRepository.count()
        );

        analytics.put(
                "totalGoals",
                goalRepository.count()
        );

        analytics.put(
                "totalTasks",
                taskRepository.count()
        );

        return analytics;
    }
}
