package com.example.demo.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ai.AIService;
import com.example.demo.entity.Performance;
import com.example.demo.repository.PerformanceRepository;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final AIService aiService;
    private final PerformanceRepository performanceRepository;

    public AIController(
            AIService aiService,
            PerformanceRepository performanceRepository) {

        this.aiService = aiService;
        this.performanceRepository =
                performanceRepository;
    }

    @GetMapping("/insights/{employeeId}")
    public ResponseEntity<?> getInsight(
            @PathVariable Long employeeId) {

        Performance performance =
                performanceRepository
                        .findAll()
                        .stream()
                        .filter(p ->
                                p.getEmployee() != null &&
                                p.getEmployee()
                                        .getId()
                                        .equals(employeeId)
                        )
                        .findFirst()
                        .orElse(null);

        String insight =
                aiService.generateInsight(
                        performance
                );

        return ResponseEntity.ok(
                Map.of(
                        "employeeId",
                        employeeId,
                        "insight",
                        insight
                )
        );
    }
}