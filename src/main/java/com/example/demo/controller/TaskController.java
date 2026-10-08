package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskRepository repository;

    public TaskController(
            TaskRepository repository) {

        this.repository = repository;
    }

    @GetMapping
    public List<Task> getAllTasks() {

        return repository.findAll();
    }

    @PostMapping
    public Task createTask(
            @RequestBody Task task) {

        return repository.save(task);
    }
}