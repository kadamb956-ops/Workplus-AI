package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Performance;
import com.example.demo.repository.PerformanceRepository;

@RestController
@RequestMapping("/api/performance")
public class PerformanceController {

    private final PerformanceRepository repository;

    public PerformanceController(
            PerformanceRepository repository) {

        this.repository = repository;
    }

    @GetMapping
    public List<Performance> getAllPerformance() {

        return repository.findAll();
    }

    @PostMapping
    public Performance createPerformance(
            @RequestBody Performance performance) {

        return repository.save(performance);
    }
}