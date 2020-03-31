package controller;

import domain.Person;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Chat extends RequestHandler {
    @Override
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) {
        Person user = (Person) request.getSession().getAttribute("user");
        List<String> errors = new ArrayList<String>();
        List<Person> friends = user.getFriends();

         request.setAttribute("friends", friends);



        if(user != null){
        request.setAttribute("user", user);}
        else{
            errors.add("Er is niemand aangemeld.");
        }


            request.setAttribute("errors", errors);


        try {
            request.getRequestDispatcher("chat.jsp").forward(request, response);
        } catch (ServletException | IOException e) {
            e.printStackTrace();
        }
    }
}
