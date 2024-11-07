package com.estacio.polimed.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ServicesController {

    @GetMapping("/services")
    public ModelAndView index() {
        ModelAndView mv = new ModelAndView("services");
        return mv;
    }

}
