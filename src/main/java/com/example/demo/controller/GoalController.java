package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Goal;
import com.example.demo.repository.GoalRepository;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

    private final GoalRepository repository;

    public GoalController(
            GoalRepository repository) {

        this.repository = repository;
    }

    @GetMapping
    public List<Goal> getAllGoals() {

        return repository.findAll();
    }

    @PostMapping
    public Goal createGoal(
            @RequestBody Goal goal) {

        return repository.save(goal);
    }
}