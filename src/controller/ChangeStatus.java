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
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) {
        Person user = (Person) request.getSession().getAttribute("user");
        String customStatus = request.getParameter("customStatus");
        List<String> errors = new ArrayList<String>();
        List<Person> friends = user.getFriends();

        request.setAttribute("friends", friends);

        if(user != null){
        if(customStatus != null){
            user.setStatus(customStatus);
        } else {
                errors.add("status mag niet leeg zijn");
        }} else {
            errors.add("Kan status niet wijzigen.");
        }

        request.setAttribute("errors", errors);

        try {
            request.getRequestDispatcher("chat.jsp").forward(request, response);
        } catch (ServletException | IOException e) {
            e.printStackTrace();
        }


    }
}
