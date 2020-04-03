package controller;

import domain.Person;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class AddFriend extends AsyncHandler{
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        String email = request.getParameter("addFriend");
        Person person = getPersonService().getPerson(email);
        Person user = (Person) request.getSession().getAttribute("user");
        user.addFriend(person);

        List<Person> friends = user.getFriends();

        request.setAttribute("friends", friends);

       return "chat.jsp";
    }
}
