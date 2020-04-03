package controller;

import domain.Person;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ChangeStatus extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        Person user = (Person) request.getSession().getAttribute("user");
        String changeStatus = request.getParameter("changeStatus");
        List<String> errors = new ArrayList<String>();
        List<Person> friends = user.getFriends();

        request.setAttribute("friends", friends);

        if(user != null){
        if(changeStatus != null){
            user.setStatus(changeStatus);
        } else {
                errors.add("status mag niet leeg zijn");
        }} else {
            errors.add("Kan status niet wijzigen.");
        }

        request.setAttribute("errors", errors);

        return "";


    }
}
