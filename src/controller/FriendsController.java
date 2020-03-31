package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import domain.Person;
import domain.PersonService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/FriendsController")
public class FriendsController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    private PersonService model = new PersonService();
    private ControllerFactory controllerFactory = new ControllerFactory();

    public FriendsController() {super();}

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ObjectMapper mapper = new ObjectMapper();
       HttpSession session = request.getSession();
       Person person = (Person) session.getAttribute("user");
       List<Person> friends = person.getFriends();

       String jsonFriendList = mapper.writeValueAsString(friends);
       response.setContentType("text/json");
       response.getWriter().write(jsonFriendList);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
