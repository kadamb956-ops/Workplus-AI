package com.example.demo.ai;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Performance;

@Service
public class AIService {

    public String generateInsight(
            Performance performance) {

        if (performance == null) {

            return "No performance data available.";
        }

        Double score =
                performance.getScore();

        if (score == null) {

            return "Performance score is not available.";
        }

        if (score >= 90) {

            return "Excellent performance. "
                    + "Employee is performing above expectations. "
                    + "Consider assigning advanced responsibilities.";
        }

        if (score >= 75) {

            return "Good performance. "
                    + "Employee is meeting expectations. "
                    + "Focus on continuous improvement.";
        }

        if (score >= 60) {

            return "Average performance. "
                    + "Consider additional mentoring and "
                    + "goal tracking.";
        }

        return "Performance requires attention. "
                + "Consider training, mentoring, and "
                + "a performance improvement plan.";
    }
}
