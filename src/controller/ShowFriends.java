package controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.Person;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

public class ShowFriends extends AsyncHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
        ObjectMapper mapper = new ObjectMapper();
        HttpSession session = request.getSession();
        Person person = (Person) session.getAttribute("user");
        List<Person> friends = person.getFriends();

        String jsonFriendList = null;
        try {
            jsonFriendList = mapper.writeValueAsString(friends);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        response.setContentType("text/json");
        try {
            response.getWriter().write(jsonFriendList);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }
}
