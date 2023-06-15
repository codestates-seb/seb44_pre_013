package server.question.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class questionController {
    @GetMapping
    public String test() {
        return "github merge test";
    }
}
