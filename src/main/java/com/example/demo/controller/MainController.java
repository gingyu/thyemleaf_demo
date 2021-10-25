package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MainController {

    @GetMapping("/main")
    public String test1(HttpServletRequest request, Model model) {
        model.addAttribute("item", true);

        return "contents/home";
    }

    @GetMapping("/sub")
    public String test2(Model model) {
        model.addAttribute("item", true);

        return "contents/home";
    }

    @PostMapping("signIn")
    public ModelAndView signIn(@ModelAttribute Member member) {
        ModelAndView mav = new ModelAndView();
        mav.addObject("member", member);
        mav.setViewName("contents/signIn");
        return mav;
    }

}
