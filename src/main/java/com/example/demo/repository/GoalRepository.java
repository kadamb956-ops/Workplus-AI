package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Goal;

public interface GoalRepository
        extends JpaRepository<Goal, Long> {
}